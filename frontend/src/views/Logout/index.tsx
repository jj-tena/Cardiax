import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import Header from "components/Header";
import useLogout from "./Logout";
import LogoutStyles from './Logout.styles';

const Logout = () => {

    const {handleLogout} = useLogout();

    return (
        <Container>
            <Header/>
            <Box
                sx={LogoutStyles.main}
            >
                <Container maxWidth="sm">
                    <Box sx={LogoutStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={LogoutStyles.title}>
                            Cerrar sesión
                        </Typography>
                        <Paper elevation={3} sx={LogoutStyles.content}>
                            <Box sx={LogoutStyles.subcontent}>
                                <Typography variant="body1">
                                    ¿Estás seguro de que deseas cerrar sesión?
                                </Typography>
                                <Button onClick={handleLogout} variant="contained" color="primary">
                                    Cerrar sesión
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default Logout;