import React from "react";
import HomeStyles from "./Home.styles";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Header from "components/Header";

const Home = () => {

    return (
        <Container>
            <Header />
            <Box style={HomeStyles.main}>
                <Box sx={HomeStyles.info}>
                    <Typography variant="h2">
                        Cardiax
                    </Typography>
                    <img src="../logo3.png" alt="Imagen" style={HomeStyles.logo} />
                    <Typography variant="h5" mt={2}>
                        Cardiax es una plataforma para predecir tu riesgo de padecer infarto mediante inteligencia artificial
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={HomeStyles.columns}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={HomeStyles.column}>
                            <img src="../icon1.png" alt="Imagen" style={HomeStyles.columnIcon} />
                            <Typography variant="h6" mt={1}>
                                Predice el riesgo de tus analíticas
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={HomeStyles.column}>
                            <img src="../icon2.png" alt="Imagen" style={HomeStyles.columnIcon} />
                            <Typography variant="h6" mt={1}>
                                Explora tu listado de analíticas
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={HomeStyles.column}>
                            <img src="../icon3.png" alt="Imagen" style={HomeStyles.columnIcon} />
                            <Typography variant="h6" mt={1}>
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
