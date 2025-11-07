import { createContext, useState, useEffect } from 'react' ;
import authService from '../services/authService' ;

export const    AuthContext = createContext() ; 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null) ; 
    const [loading, setLoading] = useState(true) ; 

    // Check if user is logged in on mount 
    useEffect ( () => {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser); 
        setLoading(false);
    }, []);

    // Login function 
    const login = async (credentials) => {
        const userData = await authService.login(credentials); 
        setUser(userData);
        return userData ;    
    };

    // Register function 
    const register = async (userData) => {
        const newUser = await authService.register(userData);
        setUser(newUser);
        return newUser ; 
    };

    // Logout function
    const logout =() => {
        authService.logout();
        setUser(null);
    };

    const value = {
        user,
        login,
        register,
        logout,
        loading,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
}