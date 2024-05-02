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
                sx={LoginStyles.main}
            >
                <Container maxWidth="sm">
                    <Box sx={LoginStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={LoginStyles.title}>
                            Iniciar sesión
                        </Typography>
                        <Paper elevation={3} sx={LoginStyles.content}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={LoginStyles.form}>
                                    <TextField
                                        label="Correo electrónico"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={handleInputChange(setEmail)}
                                    />
                                    <TextField
                                        label="Contraseña"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={handleInputChange(setPassword)}
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
