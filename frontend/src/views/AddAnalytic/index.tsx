import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Select, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import AddAnalyticStyles from './AddAnalytic.styles';
import useAddAnalytic from "./AddAnalytic";
import Header from "components/Header";

const AddAnalytic = () => {

    const {highBP, setHighBP, highChol, setHighChol, cholCheck, setCholCheck, imc, setImc,
        smoker, setSmoker, stroke, setStroke, diabetes, setDiabetes, physActivity, setPhysActivity,
        fruits, setFruits, veggies, setVeggies, hvyAlcoholConsump, setHvyAlcoholConsump, 
        anyHealthcare, setAnyHealthcare, noDocbcCost, setNoDocbcCost, genHlth, setGenHlth,
        menthlth, setMenthlth, physHlth, setPhysHlth, diffWalk, setDiffWalk, sex, setSex,
        age, setAge, education, setEducation, income, setIncome, handleSubmit
    } = useAddAnalytic();

    return (
        <Container>
            <Header/>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center', // Centra verticalmente los elementos hijos
                    justifyContent: 'center', // Centra horizontalmente los elementos hijos
                    minHeight: '85vh', // Establece el alto mínimo como el 100% de la altura de la ventana
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mt: 16, mb: 12 }}>
                        <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                            Añadir Analítica
                        </Typography>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 'auto' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Padece hipertensión?
                                        </Typography>
                                        <RadioGroup row aria-label="highBP" name="highBP" value={highBP} onChange={(e) => setHighBP(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Tiene colesterol alto?
                                        </Typography>
                                        <RadioGroup row aria-label="highChol" name="highChol" value={highChol} onChange={(e) => setHighChol(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Revisó de colesterol en los ultimos 5 años?
                                        </Typography>
                                        <RadioGroup row aria-label="cholCheck" name="cholCheck" value={cholCheck} onChange={(e) => setCholCheck(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <TextField
                                        label="Índice de masa corporal"
                                        type="number"
                                        required
                                        value={imc}
                                        onChange={(e) => setImc(e.target.value)}
                                        inputProps={{
                                            min: 0
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Es fumador?
                                        </Typography>
                                        <RadioGroup row aria-label="smoker" name="smoker" value={smoker} onChange={(e) => setSmoker(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Ha sufrido algún infarto?
                                        </Typography>
                                        <RadioGroup row aria-label="stroke" name="stroke" value={stroke} onChange={(e) => setStroke(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1">¿Padece de diabetes?</Typography>
                                        <Select
                                            value={diabetes}
                                            onChange={(e) => setDiabetes(e.target.value as string)}
                                            required
                                        >
                                            <MenuItem value="0">No</MenuItem>
                                            <MenuItem value="1">Tengo antecedentes familiares</MenuItem>
                                            <MenuItem value="2">Tengo prediabetes</MenuItem>
                                            <MenuItem value="3">Tengo diabetes</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Realiza actividad física regularmente?
                                        </Typography>
                                        <RadioGroup row aria-label="physActivity" name="physActivity" value={physActivity} onChange={(e) => setPhysActivity(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Consume al menos una fruta al día?
                                        </Typography>
                                        <RadioGroup row aria-label="fruits" name="fruits" value={fruits} onChange={(e) => setFruits(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Consume al menos una verdura al día?
                                        </Typography>
                                        <RadioGroup row aria-label="veggies" name="veggies" value={veggies} onChange={(e) => setVeggies(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Toma más de 14 bebidas alcohólicas a la semana?
                                        </Typography>
                                        <RadioGroup row aria-label="hvyAlcoholConsump" name="hvyAlcoholConsump" value={hvyAlcoholConsump} onChange={(e) => setHvyAlcoholConsump(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Tiene algún seguro de salud?
                                        </Typography>
                                        <RadioGroup row aria-label="anyHealthcare" name="anyHealthcare" value={anyHealthcare} onChange={(e) => setAnyHealthcare(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿No pudo permitirse ir al médico este año?
                                        </Typography>
                                        <RadioGroup row aria-label="noDocbcCost" name="noDocbcCost" value={noDocbcCost} onChange={(e) => setNoDocbcCost(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1">Evalúe su salud general:</Typography>
                                        <Select
                                            value={genHlth}
                                            onChange={(e) => setGenHlth(e.target.value as string)}
                                            required
                                        >
                                            <MenuItem value="0">Mala</MenuItem>
                                            <MenuItem value="1">Regular</MenuItem>
                                            <MenuItem value="2">Normal</MenuItem>
                                            <MenuItem value="3">Buena</MenuItem>
                                            <MenuItem value="4">Excelente</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Typography variant="body1">En los últimos 30 días, cuantos días hace desde que padeció:</Typography>
                                        <TextField
                                            label="Un problema de salud mental"
                                            type="number"
                                            required
                                            value={menthlth}
                                            onChange={(e) => setMenthlth(e.target.value)}
                                            inputProps={{
                                                min: 0,
                                                max: 30
                                            }}
                                        />
                                        <TextField
                                            label="Un problema de salud física"
                                            type="number"
                                            required
                                            value={physHlth}
                                            onChange={(e) => setPhysHlth(e.target.value)}
                                            inputProps={{
                                                min: 0,
                                                max: 30
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            ¿Dificultad para caminar o subir escaleras?
                                        </Typography>
                                        <RadioGroup row aria-label="diffWalk" name="diffWalk" value={diffWalk} onChange={(e) => setDiffWalk(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="No" />
                                            <FormControlLabel value="1" control={<Radio />} label="Sí" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>
                                        <Typography>
                                            Sexo
                                        </Typography>
                                        <RadioGroup row aria-label="sex" name="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                                            <FormControlLabel value="0" control={<Radio />} label="Mujer" />
                                            <FormControlLabel value="1" control={<Radio />} label="Hombre" />
                                        </RadioGroup>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1">Edad:</Typography>
                                        <Select
                                            value={age}
                                            onChange={(e) => setAge(e.target.value as string)}
                                            required
                                        >
                                            <MenuItem value="0">18 - 24</MenuItem>
                                            <MenuItem value="1">25 - 29</MenuItem>
                                            <MenuItem value="2">30- 34</MenuItem>
                                            <MenuItem value="3">35 - 39</MenuItem>
                                            <MenuItem value="4">40 - 44</MenuItem>
                                            <MenuItem value="5">45 - 49</MenuItem>
                                            <MenuItem value="6">50 - 54</MenuItem>
                                            <MenuItem value="7">55 - 59</MenuItem>
                                            <MenuItem value="8">60 - 64</MenuItem>
                                            <MenuItem value="9">65 - 69</MenuItem>
                                            <MenuItem value="10">70 - 74</MenuItem>
                                            <MenuItem value="11">75 - 79</MenuItem>
                                            <MenuItem value="12">80 o más</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1">Nivel educativo:</Typography>
                                        <Select
                                            value={education}
                                            onChange={(e) => setEducation(e.target.value as string)}
                                            required
                                        >
                                            <MenuItem value="0">Guardería</MenuItem>
                                            <MenuItem value="1">Infantil</MenuItem>
                                            <MenuItem value="2">Primaria</MenuItem>
                                            <MenuItem value="3">ESO</MenuItem>
                                            <MenuItem value="4">Bachillerato</MenuItem>
                                            <MenuItem value="5">Carrera universitaria</MenuItem>
                                            <MenuItem value="6">Máster o doctorado</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body1">Salario anual:</Typography>
                                        <Select
                                            value={income}
                                            onChange={(e) => setIncome(e.target.value as string)}
                                            required
                                        >
                                            <MenuItem value="0">10000 - 20000</MenuItem>
                                            <MenuItem value="1">20001 - 30000</MenuItem>
                                            <MenuItem value="2">30001 - 40000</MenuItem>
                                            <MenuItem value="3">50001 - 60000</MenuItem>
                                            <MenuItem value="4">60001 - 75000</MenuItem>
                                            <MenuItem value="5">75001 o más</MenuItem>
                                        </Select>
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
