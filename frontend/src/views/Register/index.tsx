import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import RegisterStyles from "./Register.styles";
import useRegister from "./Register";
import Header from "components/Header";

const Register = () => {

    const {name, setName, lastName, setLastName, email, setEmail, password, confirmPassword, 
        submitEnabled, error, handleSubmit, handleInputChange, handlePasswordChange, handleConfirmPasswordChange} = useRegister();

    return (
        <Container>
            <Header/>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '95vh',
            }}
        >
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mt: 4, mb: 3 }}>
                        <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                            Registrarse
                        </Typography>
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField
                                        label="Nombre"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={handleInputChange(setName)}
                                    />
                                    <TextField
                                        label="Apellidos"
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={handleInputChange(setLastName)}
                                    />
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
                                        onChange={handlePasswordChange}
                                    />
                                    <TextField
                                        label="Confirmar contraseña"
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        error={error !== ''}
                                        helperText={error}
                                    />
                                    <Button type="submit" variant="contained" color="primary" disabled={!submitEnabled}>
                                        Registrarse
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default Register;