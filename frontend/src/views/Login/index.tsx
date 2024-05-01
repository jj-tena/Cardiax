import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import LoginStyles from "./Login.styles";
import useLogin from "./Login";
import Header from "components/Header";

const Login = () => {
    const {email, setEmail, password, setPassword, isSubmitEnabled, handleInputChange, handleSubmit} = useLogin();

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
                            Iniciar sesión
                        </Typography>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField
                                        label="Correo electrónico"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={handleInputChange(setEmail)} // Manejar cambios en el campo de correo electrónico
                                    />
                                    <TextField
                                        label="Contraseña"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={handleInputChange(setPassword)} // Manejar cambios en el campo de contraseña
                                    />
                                    <Button type="submit" variant="contained" color="primary" disabled={!isSubmitEnabled}>
                                        Iniciar sesión
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default Login;
