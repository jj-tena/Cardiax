import React from 'react';
import AnalyticsStyles from "./Analytics.styles";
import useAnalytics from "./Analytics";
import { Container, Typography, Box, Grid } from '@mui/material';
import Header from "components/Header";
import AnalyticCard from 'components/AnalyticCard';

const Analytics = () => {

    const {analytics} = useAnalytics();

    return (
        <Container>
            <Header/>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '95vh',
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mt: 4, mb: 3 }}>
                        <Typography variant="h4" gutterBottom sx={{mb: 6}}>
                            Listado de Analíticas
                        </Typography>
                        <Box mt={4}>
                            {analytics.length === 0 ? (
                                <Box>
                                    <Typography sx={{mb: 2}} variant="h5">No hay ninguna analítica en su historial.</Typography>
                                    <Typography variant="h5">Puedes empezar a subir sus analíticas en la sección "Añadir analítica".</Typography>
                                </Box>
                            ) : (
                                <Grid container spacing={6}>
                                    {analytics.map(analytic => (
                                        <Grid item key={analytic.id} xs={12} sm={6} md={4}>
                                            <AnalyticCard analytic={analytic} />
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default Analytics;