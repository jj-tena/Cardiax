import React from "react";
import HomeStyles from "./Home.styles";
import useHome from "./Home";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Header from "components/Header";

const Home = () => {

    const {} = useHome();

    return (
        <Container>
            <Header/>
            <Box style={HomeStyles.main}>
                <Box sx={{ textAlign: 'center', marginBottom: '60px'}}>
                    <Typography variant="h1">
                        Cardiax
                    </Typography>
                    <img src="../logo3.png" alt="Imagen" style={{ width: '50%', maxWidth: '300px', margin: 'auto' }} />
                    <Typography variant="h5" mt={2}>
                        Cardiax es una plataforma para predecir tu riesgo de padecer infarto mediante inteligencia artificial
                    </Typography>
                </Box>

                <Grid container spacing={10} sx={{ marginBottom: '60px'}}>
                    <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <img src="../icon1.png" alt="Imagen" style={{ width: '100%' }} />
                        <Typography variant="h6" mt={1} sx={{ textAlign: 'center' }}>
                            Predice el riesgo de tus analíticas
                        </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <img src="../icon2.png" alt="Imagen" style={{ width: '100%' }} />
                        <Typography variant="h6" mt={1} sx={{ textAlign: 'center' }}>
                            Explora tu listado de analíticas
                        </Typography>
                    </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <img src="../icon3.png" alt="Imagen" style={{ width: '100%' }} />
                        <Typography variant="h6" mt={1} sx={{ textAlign: 'center' }}>
                            Visualiza la evolución de tu riesgo
                        </Typography>
                    </Paper>
                    </Grid>
                </Grid>
                </Box>
        </Container>
    )
}

export default Home;