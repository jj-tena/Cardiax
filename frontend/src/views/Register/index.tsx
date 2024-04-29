import React from "react";
import RegisterStyles from "./Register.styles";
import useRegister from "./Register";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Register = () => {

    const {} = useRegister();

    return (
        <Container>
            <Header/>
            <Container style={RegisterStyles.main}>
                <Typography>Register</Typography>
            </Container>
        </Container>
    )
}

export default Register;