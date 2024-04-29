import React from "react";
import LogoutStyles from "./Logout.styles";
import useLogout from "./Logout";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Logout = () => {

    const {} = useLogout();

    return (
        <Container>
            <Header/>
            <Container style={LogoutStyles.main}>
                <Typography>Logout</Typography>
            </Container>
        </Container>
    )
}

export default Logout;