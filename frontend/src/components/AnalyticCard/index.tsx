import React from 'react';
import { Card, CardContent, Typography, Modal, Box, Fade } from '@mui/material';
import { AnalyticType } from 'types/AnalyticType';
import useAnalyticCard from './AnalyticCard';
import AnalyticCardStyles from './AnalyticCard.styles';

const AnalyticCard: React.FC<{ analytic: AnalyticType }> = ({ analytic }) => {

    const {open, handleOpen, handleClose} = useAnalyticCard();

    return (
        <>
            <Card onClick={handleOpen}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Analítica {analytic.id}
                    </Typography>
                    <Typography color="text.secondary">
                        {(analytic.heartDisease == '0') ? 'Sin riesgo de infarto' : 'Con riesgo de infarto'}
                    </Typography>
                </CardContent>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={AnalyticCardStyles.main}>
                        <Typography variant="h6" id="transition-modal-title" gutterBottom>
                            Analítica {analytic.id}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-description" gutterBottom>
                            {(analytic.heartDisease == '0') ? 'Sin riesgo de infarto' : 'Con riesgo de infarto'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Sexo: {(analytic.sex == '0') ? 'Mujer' : 'Hombre'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Edad: {analytic.age}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Tipo de dolor en el pecho: {' '}
                            {(analytic.chestPainType == '1') ? 'Angina típica' : ''}
                            {(analytic.chestPainType == '2') ? 'Angina atípica' : ''}
                            {(analytic.chestPainType == '3') ? 'Dolor no anginoso' : ''}
                            {(analytic.chestPainType == '4') ? 'Asintomático' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Presión arterial en reposo (mmHg): {analytic.restingBloodPressure}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Niveles de colesterol sérico (mg/dL): {analytic.serumCholestoral}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Nivel de azúcar en sangre en ayunas: {(analytic.fastingBloodSugar == '0') ? '0' : '1'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Electrocardiograma en reposo: {' '}
                            {(analytic.restingElectrocardiographicResults == '0') ? 'Normal' : ''}
                            {(analytic.restingElectrocardiographicResults == '1') ? 'Anomalía de onda ST-T' : ''}
                            {(analytic.restingElectrocardiographicResults == '2') ? 'Hipertrofia ventricular izquierda' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Frecuencia cardíaca máxima durante el ejercicio (bpm): {analytic.maximumHeartRateAchieved}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Angina inducida por el ejercicio: {(analytic.exerciseInducedAngina == '0') ? 'No' : 'Si'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Depresión ST medida en el electrocardiograma en reposo post ejercicio: {analytic.oldpeak}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Pendiente del segmento ST durante el ejercicio: {' '}
                            {(analytic.slopeOfThePeakExercise == '1') ? 'Pendiente ascendente' : ''}
                            {(analytic.slopeOfThePeakExercise == '2') ? 'Pendiente plana' : ''}
                            {(analytic.slopeOfThePeakExercise == '3') ? 'Pendiente descendente' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Número de vasos principales (entre 0 y 3) coloreados por fluoroscopia: {' '}
                            {(analytic.numberOfMajorVessels == '0') ? '0' : ''}
                            {(analytic.numberOfMajorVessels == '1') ? '1' : ''}
                            {(analytic.numberOfMajorVessels == '2') ? '2' : ''}
                            {(analytic.numberOfMajorVessels == '3') ? '3' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Tipo de talasemia que tiene el paciente: {analytic.thal}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Fecha y hora: {analytic.timestamp}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default AnalyticCard;