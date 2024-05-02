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
                sx={AnalyticsStyles.main}
            >
                <Container maxWidth="sm">
                    <Box sx={AnalyticsStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={AnalyticsStyles.title}>
                            Listado de Analíticas
                        </Typography>
                        <Box sx={AnalyticsStyles.content}>
                            {analytics.length === 0 ? (
                                <Box>
                                    <Typography sx={AnalyticsStyles.noContent} variant="h5">No hay ninguna analítica en su historial.</Typography>
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