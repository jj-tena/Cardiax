import React, { useState } from 'react';
import axios from 'axios';

const useLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setter(value);
        setIsSubmitEnabled(email !== '' && password !== '');
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`email: ${email} password: ${password}`);
        try {
            const response = await axios.post('/login', { email, password });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return {email, setEmail, password, setPassword, isSubmitEnabled, handleInputChange, handleSubmit};
}

export default useLogin;