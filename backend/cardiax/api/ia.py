# pip install ctgan
# pip install tabpfn
import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OrdinalEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, precision_score, recall_score, roc_auc_score
from sklearn.compose import ColumnTransformer
from sklearn.neighbors import LocalOutlierFactor
from sklearn.ensemble import IsolationForest
import numpy as np
from ctgan import CTGAN
import tabpfn
import warnings
import logging
import os

warnings.filterwarnings("ignore", category=FutureWarning, module='tabpfn')
warnings.filterwarnings("ignore", category=UserWarning, module='torch')

# Configuración del logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class ia:
    def __init__(self):
        file_name = os.path.join(os.path.dirname(__file__), 'dataset.dat')
        columns = ['age', 'sex', 'chest_pain_type', 'resting_blood_pressure', 'serum_cholestoral', 'fasting_blood_sugar', 'resting_electrocardiographic_results','maximum_heart_rate_achieved', 'exercise_induced_angina', 'oldpeak', 'slope_of_the_peak_exercise', 'number_of_major_vessels', 'thal', 'heart_disease']
        self.data = pd.read_csv(file_name, sep=' ', names=columns)
        target = 'heart_disease'
        self.data['heart_disease'] = self.data['heart_disease'].replace({1: 0, 2: 1})
        self.preprocess(self.data, target)
        balanced_data = self.balance_dataset_with_ctgan(self.data, target, self.get_discrete_columns(self.data, target))
        
        X = balanced_data.drop(columns=[target])
        y = balanced_data[target]
        self.train(X, y)

    def deleteOutliers(self, dataset):
        clf_lof = LocalOutlierFactor(n_neighbors=20, contamination=0.1)
        outliers_lof = clf_lof.fit_predict(dataset)
        outliers_indices_lof = np.where(outliers_lof == -1)

        clf_if = IsolationForest(random_state=0)
        outliers_if = clf_if.fit_predict(dataset)
        outliers_indices_if = np.where(outliers_if == -1)

        common_outliers = np.intersect1d(outliers_indices_lof, outliers_indices_if)

        if len(common_outliers) > 0:
            dataset = pd.DataFrame(dataset)
            dataset = dataset.drop(common_outliers)

        return dataset

    def deleteNulls(self, dataset):
        null_count_before = dataset.isnull().sum().sum()

        if null_count_before > 0:
            dataset.dropna(inplace=True)
        return dataset

    def scaleEncode(self, dataset, column_to_encode):
        column_data = dataset[column_to_encode]
        dataset = dataset.drop(columns=[column_to_encode])

        num_cols = dataset.select_dtypes(include=['int64', 'float64']).columns
        cat_cols = dataset.select_dtypes(include=['object']).columns

        num_pipeline = Pipeline([
            ('scaler', StandardScaler())
        ])

        cat_pipeline = Pipeline([
            ('encoder', OrdinalEncoder(handle_unknown='use_encoded_value', unknown_value=-1))
        ])

        preprocessor = ColumnTransformer([
            ('Numeric Columns', num_pipeline, num_cols),
            ('Categorical Columns', cat_pipeline, cat_cols)
        ])

        transformed_data = preprocessor.fit_transform(dataset)
        transformed_dataframe = pd.DataFrame(transformed_data, columns=num_cols.tolist() + cat_cols.tolist())
        transformed_dataframe[column_to_encode] = column_data

        return transformed_dataframe

    def preprocess(self, dataframe, target):
        logging.info("Inicio del método preprocess")
        dataframe_without_nulls = self.deleteNulls(dataframe)
        dataframe_scaled_encoded = self.scaleEncode(dataframe_without_nulls, target)
        dataframe_without_outliers = self.deleteOutliers(dataframe_scaled_encoded)
        logging.info("Fin del método preprocess")
        return dataframe_without_outliers

    def get_discrete_columns(self, dataframe, target, threshold_unique_values=10):
        discrete_columns = []
        for column in dataframe.columns:
            if column != target and dataframe[column].nunique() <= threshold_unique_values:
                discrete_columns.append(column)
        return discrete_columns

    def balance_dataset_with_ctgan(self, dataframe, target, discrete_columns, epochs=300):
        logging.info("Inicio del método balance_dataset_with_ctgan")
        if target not in dataframe.columns:
            raise ValueError(f"La columna objetivo '{target}' no se encuentra en el DataFrame")

        X = dataframe.drop(columns=[target])
        y = dataframe[target]
        class_counts = y.value_counts()
        max_class = class_counts.idxmax()
        max_count = class_counts.max()
        samples_to_generate = {cls: max_count - count for cls, count in class_counts.items() if cls != max_class}

        ctgan = CTGAN(epochs=epochs)
        ctgan.fit(X, discrete_columns)

        synthetic_samples_list = []
        for cls, n_samples in samples_to_generate.items():
            synthetic_samples = ctgan.sample(n_samples)
            synthetic_df = pd.DataFrame(synthetic_samples, columns=X.columns)
            synthetic_df[target] = cls
            synthetic_samples_list.append(synthetic_df)

        synthetic_data = pd.concat(synthetic_samples_list, ignore_index=True)
        balanced_dataframe = pd.concat([dataframe, synthetic_data], ignore_index=True)

        logging.info("Fin del método balance_dataset_with_ctgan")
        return balanced_dataframe

    def test_model_tabpfn(self, name, model, X_test, y_test):
        y_pred = model.predict(X_test)
        y_proba = model.predict_proba(X_test)[:, 1]

        f1 = f1_score(y_test, y_pred, average='weighted')
        precision = precision_score(y_test, y_pred, average='weighted')
        recall = recall_score(y_test, y_pred, average='weighted')
        auc_roc = roc_auc_score(y_test, y_proba)

        return f1, precision, recall, auc_roc

    def train(self, X, y, test_size=0.2, random_state=42):
        logging.info("Inicio del método train")
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state)

        model = tabpfn.TabPFNClassifier(device='cpu')
        model.fit(X_train, y_train)

        f1, precision, recall, auc_roc = self.test_model_tabpfn('TabPFN', model, X_test, y_test)

        print(f"F1 Score: {f1}")
        print(f"Precision: {precision}")
        print(f"Recall: {recall}")
        print(f"AUC-ROC: {auc_roc}")

        self.model = model
        logging.info("Fin del método train")

    def transformData(self, request):
        # Extraer datos del request
        data = {
            'heart_disease': request.data.get('heartDisease', 0),
            'age': float(request.data.get('age', 0)),  # Convertir a float
            'sex': float(request.data.get('sex', 0)),  # Convertir a float
            'chest_pain_type': float(request.data.get('chestPainType', 0)),  # Convertir a float
            'resting_blood_pressure': float(request.data.get('restingBloodPressure', 0)),  # Convertir a float
            'serum_cholestoral': float(request.data.get('serumCholestoral', 0)),  # Convertir a float
            'fasting_blood_sugar': float(request.data.get('fastingBloodSugar', 0)),  # Convertir a float
            'resting_electrocardiographic_results': float(request.data.get('restingElectrocardiographicResults', 0)),  # Convertir a float
            'maximum_heart_rate_achieved': float(request.data.get('maximumHeartRateAchieved', 0)),  # Convertir a float
            'exercise_induced_angina': float(request.data.get('exerciseInducedAngina', 0)),  # Convertir a float
            'oldpeak': float(request.data.get('oldpeak', 0)),  # Convertir a float
            'slope_of_the_peak_exercise': float(request.data.get('slopeOfThePeakExercise', 0)),  # Convertir a float
            'number_of_major_vessels': float(request.data.get('numberOfMajorVessels', 0)),  # Convertir a float
            'thal': float(request.data.get('thal', 0))  # Convertir a float
        }
        
        # Crear DataFrame de entrada
        df = pd.DataFrame([data])
        
        # Aplicar el mismo preprocesamiento que se aplicó al conjunto de entrenamiento
        # Asegúrate de usar el preprocesador ajustado durante el entrenamiento
        df_transformed = self.scaleEncode(df, 'heart_disease')  # Reemplaza 'heart_disease' si es necesario
        
        # Asegúrate de que las columnas estén alineadas con las que el modelo espera
        df_transformed = df_transformed.drop(columns=['heart_disease'], errors='ignore')  # Elimina la columna objetivo si está presente
        
        return df_transformed


    def predict(self, input_data):
        if self.model is None:
            raise ValueError("El modelo no está entrenado. Entrénalo primero usando el método train().")
        
        transformed_data = self.transformData(input_data)
        prediction = self.model.predict(transformed_data)
        
        # Usar f-strings para formatear el mensaje
        logging.info(f"PREDICCION: {prediction[0]}")
        
        return prediction[0]
