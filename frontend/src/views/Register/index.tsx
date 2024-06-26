import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import RegisterStyles from "./Register.styles";
import useRegister from "./Register";
import Header from "components/Header";

const Register = () => {

    const {name, setName, surname, setSurname, email, setEmail, password, confirmPassword, 
        submitEnabled, error, handleSubmit, handleInputChange, handlePasswordChange, handleConfirmPasswordChange} = useRegister();

    return (
        <Container>
            <Header/>
            <Box
                sx={RegisterStyles.main}
            >
                <Container maxWidth="sm">
                    <Box sx={RegisterStyles.submain}>
                        <Typography variant="h4" gutterBottom sx={RegisterStyles.title}>
                            Registrarse
                        </Typography>
                        <Paper elevation={3} sx={RegisterStyles.content}>
                            <form onSubmit={handleSubmit}>
                                <Box sx={RegisterStyles.form}>
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
                                        value={surname}
                                        onChange={handleInputChange(setSurname)}
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