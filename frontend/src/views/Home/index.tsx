import React from "react";
import HomeStyles from "./Home.styles";
import useHome from "./Home";
import { Container, Typography } from "@mui/material";

const Home = () => {

    const {} = useHome();

    return (
        <Container style={HomeStyles.main}>
            <Typography>Home</Typography>
        </Container>
    )
}

export default Home;