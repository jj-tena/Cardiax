import React, { useState } from 'react';
import axios from 'axios';

const useRegister = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('/register', { name, lastName, email, password });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
        setSubmitEnabled(value === confirmPassword && value !== '');
        setError('');
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setSubmitEnabled(value === password && value !== '');
        setError(value !== password ? 'Las contraseñas no coinciden' : '');
    };

    return {name, setName, lastName, setLastName, email, setEmail, password, confirmPassword, 
        submitEnabled, error, handleSubmit, handleInputChange, handlePasswordChange, handleConfirmPasswordChange};
}

export default useRegister;