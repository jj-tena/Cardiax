import React from "react";
import EvolutionStyles from "./Evolution.styles";
import useEvolution from "./Evolution";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Evolution = () => {

    const {} = useEvolution();

    return (
        <Container>
            <Header/>
            <Container style={EvolutionStyles.main}>
                <Typography>Evolution</Typography>
            </Container>
        </Container>
    )
}

export default Evolution;