import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import Header from "components/Header";
import LoginStyles from "./Logout.styles";
import useLogout from "./Logout";

const Logout = () => {

    const {handleLogout} = useLogout();

    return (
        <Container>
            <Header/>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '85vh',
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                            Cerrar sesión
                        </Typography>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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