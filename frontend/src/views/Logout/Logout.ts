import axios from 'axios';
import { useAuth } from 'context/AuthContext';

const useLogout = () => {

    const { logout } = useAuth();
    
    const handleLogout = async () => {
        logout();
        /**
        try {
            const response = await axios.post('/logout');
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
        */
    };

    return {handleLogout};
}

export default useLogout;