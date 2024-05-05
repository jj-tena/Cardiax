import os
import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import StratifiedKFold
from sklearn.metrics import classification_report
from sklearn.compose import ColumnTransformer

class ia():
    
    def __init__(self):
        self.model = self.train()

    def train(self):
        file_name = '/home/jjtena/Desktop/Master/10-TFM/Cardiax/backend/cardiax/api/heart_disease_health_indicators.csv'
        data = pd.read_csv(file_name)

        x = data.drop(columns=['HeartDiseaseorAttack'], axis=1)
        y = data['HeartDiseaseorAttack']

        skf = StratifiedKFold(n_splits=5)

        for train, test in skf.split(x, y):
            x_train, x_test = x.iloc[train], x.iloc[test]
            y_train, y_test = y.iloc[train], y.iloc[test]

            numerical_cols = x_train.select_dtypes(include=['float64']).columns
            numerical_transformer = StandardScaler()
            preprocessor = ColumnTransformer(transformers=[('num', numerical_transformer, numerical_cols)])

            model = Pipeline(steps=[('preprocessor', preprocessor), ('classifier', LogisticRegression(random_state=42))])
            model.fit(x_train, y_train)

            y_pred = model.predict(x_test)

            print("Model Evaluation:\n")
            print(classification_report(y_test, y_pred))

        return model
    
    def transformData(self, request): 
        sample = {
            'HighBP': request.data['highBP'],
            'HighChol': request.data['highChol'],
            'CholCheck': request.data['cholCheck'],
            'BMI': request.data['imc'],
            'Smoker': request.data['smoker'],
            'Stroke': request.data['stroke'],
            'Diabetes': request.data['diabetes'],
            'PhysActivity': request.data['physActivity'],
            'Fruits': request.data['fruits'],
            'Veggies': request.data['veggies'],
            'HvyAlcoholConsump': request.data['hvyAlcoholConsump'],
            'AnyHealthcare': request.data['anyHealthcare'],
            'NoDocbcCost': request.data['noDocbcCost'],
            'GenHlth': request.data['genHlth'],
            'MentHlth': request.data['menthlth'],
            'PhysHlth': request.data['physHlth'],
            'DiffWalk': request.data['diffWalk'],
            'Sex': request.data['sex'],
            'Age': request.data['age'],
            'Education': request.data['education'],
            'Income': request.data['income']
        }
        sample_df = pd.DataFrame([sample])
        return sample_df

    def predict(self, request):
        sample_df = self.transformData(request)
        predict = int(self.model.predict(sample_df)[0])
        return predict
