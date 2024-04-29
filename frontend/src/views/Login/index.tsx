import React from "react";
import LoginStyles from "./Login.styles";
import useLogin from "./Login";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Login = () => {

    const {} = useLogin();

    return (
        <Container>
            <Header/>
            <Container style={LoginStyles.main}>
                <Typography>Login</Typography>
            </Container>
        </Container>
    )
}

export default Login;