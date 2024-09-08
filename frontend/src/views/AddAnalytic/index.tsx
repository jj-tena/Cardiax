import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Select, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import AddAnalyticStyles from './AddAnalytic.styles';
import useAddAnalytic from "./AddAnalytic";
import Header from "components/Header";

const AddAnalytic = () => {

    const {sex, setSex, age, setAge, chestPainType, setChestPainType,
        restingBloodPressure, setRestingBloodPressure, serumCholestoral, setSerumCholestoral,
        fastingBloodSugar, setFastingBloodSugar, restingElectrocardiographicResults, 
        setRestingElectrocardiographicResults, maximumHeartRateAchieved, setMaximumHeartRateAchieved,
        exerciseInducedAngina, setExerciseInducedAngina, oldpeak, setOldpeak,
        slopeOfThePeakExercise, setSlopeOfThePeakExercise, numberOfMajorVessels, setNumberOfMajorVessels,
        thal, setThal, timestamp, setTimestamp, handleSubmit
    } = useAddAnalytic();

    return (
        <Container>
            <Header/>
            <Box
                sx={AddAnalyticStyles.main}
            >
                <Container maxWidth="sm">
                    <Box sx={AddAnalyticStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={AddAnalyticStyles.title}>
                            Añadir Analítica
                        </Typography>
                        <Paper elevation={3} sx={AddAnalyticStyles.content}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={AddAnalyticStyles.list}>
                                <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Sexo
                                        </Typography>
                                        <RadioGroup row aria-label="sex" name="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="Mujer" />
                                            <FormControlLabel value="1" control={<Radio />} label="Hombre" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Edad"
                                        type="number"
                                        required
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Tipo de dolor en el pecho
                                        </Typography>
                                        <RadioGroup row aria-label="chestPainType" name="chestPainType" value={chestPainType} onChange={(e) => setChestPainType(e.target.value)}>
                                            <FormControlLabel value="1" control={<Radio />} label="Angina típica" />
                                            <FormControlLabel value="2" control={<Radio />} label="Angina atípica" />
                                            <FormControlLabel value="3" control={<Radio />} label="Dolor no anginoso" />
                                            <FormControlLabel value="4" control={<Radio />} label="Asintomático" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Presión arterial en reposo (mmHg)"
                                        type="number"
                                        required
                                        value={restingBloodPressure}
                                        onChange={(e) => setRestingBloodPressure(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <TextField
                                        label="Niveles de colesterol sérico (mg/dL)"
                                        type="number"
                                        required
                                        value={serumCholestoral}
                                        onChange={(e) => setSerumCholestoral(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Nivel de azúcar en sangre en ayunas
                                        </Typography>
                                        <RadioGroup row aria-label="Nivel de azúcar en sangre en ayunas" name="fastingBloodSugar" value={fastingBloodSugar} onChange={(e) => setFastingBloodSugar(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="Inferior a 120 mg/dL" />
                                            <FormControlLabel value="1" control={<Radio />} label="Superior a 120 mg/dL" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Electrocardiograma en reposo
                                        </Typography>
                                        <RadioGroup row aria-label="Electrocardiograma en reposo" name="restingElectrocardiographicResults" value={restingElectrocardiographicResults} onChange={(e) => setRestingElectrocardiographicResults(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="Normal" />
                                            <FormControlLabel value="1" control={<Radio />} label="Anomalía de onda ST-T" />
                                            <FormControlLabel value="2" control={<Radio />} label="Hipertrofia ventricular izquierda" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Frecuencia cardíaca máxima durante el ejercicio (bpm)"
                                        type="number"
                                        required
                                        value={maximumHeartRateAchieved}
                                        onChange={(e) => setMaximumHeartRateAchieved(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Angina inducida por el ejercicio
                                        </Typography>
                                        <RadioGroup row aria-label="Angina inducida por el ejercicio" name="exerciseInducedAngina" value={exerciseInducedAngina} onChange={(e) => setExerciseInducedAngina(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Si" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Depresión ST medida en el electrocardiograma en reposo post ejercicio"
                                        type="number"
                                        required
                                        value={oldpeak}
                                        onChange={(e) => setOldpeak(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Pendiente del segmento ST durante el ejercicio
                                        </Typography>
                                        <RadioGroup row aria-label="Pendiente del segmento ST durante el ejercicio" name="slopeOfThePeakExercise" value={slopeOfThePeakExercise} onChange={(e) => setSlopeOfThePeakExercise(e.target.value)}>
                                            <FormControlLabel value="1" control={<Radio />} label="Pendiente ascendente" />
                                            <FormControlLabel value="2" control={<Radio />} label="Pendiente plana" />
                                            <FormControlLabel value="3" control={<Radio />} label="Pendiente descendente" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={AddAnalyticStyles.question}>
                                        <Typography>
                                            Número de vasos principales (entre 0 y 3) coloreados por fluoroscopia
                                        </Typography>
                                        <RadioGroup row aria-label="Número de vasos principales (entre 0 y 3) coloreados por fluoroscopia." name="numberOfMajorVessels" value={numberOfMajorVessels} onChange={(e) => setNumberOfMajorVessels(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="0" />
                                            <FormControlLabel value="1" control={<Radio />} label="1" />
                                            <FormControlLabel value="2" control={<Radio />} label="2" />
                                            <FormControlLabel value="3" control={<Radio />} label="3" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Tipo de talasemia que tiene el paciente"
                                        type="number"
                                        required
                                        value={thal}
                                        onChange={(e) => setThal(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={AddAnalyticStyles.question}>
                                        <TextField
                                            id="timestamp"
                                            label="Fecha y Hora"
                                            type="datetime-local"
                                            value={timestamp}
                                            onChange={(e) => setTimestamp(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            required
                                        />
                                    </Box>
                                    <Button type="submit" variant="contained" color="primary">
                                        Añadir Analítica
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </Box>
                </Container>
            </Box>

        </Container>
    );
};

export default AddAnalytic;
