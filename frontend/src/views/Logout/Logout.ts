import axios from 'axios';

const useLogout = () => {

    const handleLogout = async () => {
        try {
            const response = await axios.post('/logout');
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return {handleLogout};
}

export default useLogout;