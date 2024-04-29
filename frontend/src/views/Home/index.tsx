import React from "react";
import HomeStyles from "./Home.styles";
import useHome from "./Home";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Home = () => {

    const {} = useHome();

    return (
        <Container>
            <Header/>
            <Container style={HomeStyles.main}>
                <Typography>Home</Typography>
            </Container>
        </Container>
    )
}

export default Home;