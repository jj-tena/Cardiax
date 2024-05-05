import React from "react";
import EvolutionStyles from "./Evolution.styles";
import useEvolution from "./Evolution";
import { Box, Container, Paper, Typography } from "@mui/material";
import Header from "components/Header";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';

const Evolution = () => {
    const {formattedData} = useEvolution();

    return (
        <Container>
            <Header/>
            <Box sx={EvolutionStyles.main}>
                <Container maxWidth="lg">
                    <Box sx={EvolutionStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={EvolutionStyles.title}>
                            Evolución
                        </Typography>
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Paper elevation={3} sx={EvolutionStyles.content}>
                                <XYPlot width={1000} height={400} xType="time">
                                    <HorizontalGridLines />
                                    <XAxis title="Time" />
                                    <YAxis title="Heart Disease or Attack" />
                                    <LineSeries data={formattedData} />
                                </XYPlot>
                            </Paper>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default Evolution;
