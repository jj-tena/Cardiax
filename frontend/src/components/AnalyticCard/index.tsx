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
                        {(analytic.heartDiseaseorAttack == '0') ? 'Sin riesgo de infarto' : 'Con riesgo de infarto'}
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
                            {(analytic.heartDiseaseorAttack == '0') ? 'Sin riesgo de infarto' : 'Con riesgo de infarto'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Hipertensión: {(analytic.highBP == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Colesterol alto: {(analytic.highChol == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Revisión de colesterol hace menos de 5 años: {(analytic.highChol == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Índice de masa corporal: {analytic.imc}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Fumador: {(analytic.smoker == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Sufrió infarto: {(analytic.stroke == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Diabetes: {' '}
                            {(analytic.diabetes == '0') ? 'No' : ''}
                            {(analytic.diabetes == '1') ? 'Antecedentes familiares' : ''}
                            {(analytic.diabetes == '2') ? 'Prediabetes' : ''}
                            {(analytic.diabetes == '3') ? 'Diabetes tipo 1 o 2' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Actividad física regularmente: {(analytic.physActivity == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Al menos una fruta al día: {(analytic.fruits == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Al menos una verdura al día: {(analytic.veggies == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Consume 14 o más bebidas alcohólicas a la semana: {(analytic.hvyAlcoholConsump == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Seguro de salud: {(analytic.anyHealthcare == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            No pudo permitirse ir al médico este año: {(analytic.noDocbcCost == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Nivel de salud general: {' '}
                            {(analytic.genHlth == '0') ? 'Mala' : ''}
                            {(analytic.genHlth == '1') ? 'Regular' : ''}
                            {(analytic.genHlth == '2') ? 'Normal' : ''}
                            {(analytic.genHlth == '3') ? 'Buena' : ''}
                            {(analytic.genHlth == '4') ? 'Excelente' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Número de días desde el último problema de salud física este mes: {(analytic.physHlth == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Número de días desde el último problema de salud mental este mes: {(analytic.menthlth == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Dificultad para caminar o subir escaleras: {(analytic.diffWalk == '0') ? 'Sí' : 'No'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Sexo: {(analytic.sex == '0') ? 'Mujer' : 'Hombre'}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Edad: {' '}
                            {(analytic.age == '0') ? '18 - 24' : ''}
                            {(analytic.age == '1') ? '25 - 29' : ''}
                            {(analytic.age == '2') ? '30 - 34' : ''}
                            {(analytic.age == '3') ? '35 - 39' : ''}
                            {(analytic.age == '4') ? '40 - 44' : ''}
                            {(analytic.age == '5') ? '45 - 49' : ''}
                            {(analytic.age == '6') ? '50 - 54' : ''}
                            {(analytic.age == '7') ? '55 - 59' : ''}
                            {(analytic.age == '8') ? '60 - 64' : ''}
                            {(analytic.age == '9') ? '65 - 69' : ''}
                            {(analytic.age == '10') ? '70 - 74' : ''}
                            {(analytic.age == '11') ? '75 - 79' : ''}
                            {(analytic.age == '12') ? '80 o más' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Nivel educativo: {' '}
                            {(analytic.education == '0') ? 'Guardería' : ''}
                            {(analytic.education == '1') ? 'Infantil' : ''}
                            {(analytic.education == '2') ? 'Primaria' : ''}
                            {(analytic.education == '3') ? 'ESO' : ''}
                            {(analytic.education == '4') ? 'Bachillerato' : ''}
                            {(analytic.education == '5') ? 'Carrera universitaria' : ''}
                            {(analytic.education == '6') ? 'Máster o doctorado' : ''}
                        </Typography>
                        <Typography variant="body1" id="transition-modal-title" gutterBottom>
                            Salario anual: {' '}
                            {(analytic.income == '0') ? '10000 - 20000' : ''}
                            {(analytic.income == '1') ? '20001 - 30000' : ''}
                            {(analytic.income == '2') ? '30001 - 40000' : ''}
                            {(analytic.income == '3') ? '40001 - 50000' : ''}
                            {(analytic.income == '4') ? '50001 - 60000' : ''}
                            {(analytic.income == '5') ? '60001 - 75000' : ''}
                            {(analytic.income == '6') ? '75001 o más' : ''}
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