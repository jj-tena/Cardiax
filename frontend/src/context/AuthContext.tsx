import React, { createContext, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface AuthContextType {
    isAuthenticated: boolean;
    jwt: string;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const history = useHistory();

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    const [jwt, setJwt] = useState(() => {
        const storedAuth = localStorage.getItem('jwt');
        return storedAuth ? JSON.parse(storedAuth) : '';
    });

    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
        localStorage.setItem('jwt', JSON.stringify(jwt));
    }, [isAuthenticated]);
    
    const login = (token: string) => {
        setIsAuthenticated(true);
        setJwt(token);
        history.push('/analytics');
        window.location.reload();
    };

    const logout = () => {
        setIsAuthenticated(false);
        setJwt('');
        history.push('/');
        window.location.reload();
    };

    const value: AuthContextType = {
        isAuthenticated,
        jwt,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
