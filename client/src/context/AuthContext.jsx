import { createContext, useState, useEffect } from 'react' ;
import authService from '../services/authService' ;

export const AuthContext = createContext() ; 

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
        // authService.login now returns response.data with shape {_id, name, email, token}
        // store only the user's name in context so components render a primitive
        setUser(userData.name);
        return userData;
    };

    // Register function 
    const register = async (userData) => {
        const newUser = await authService.register(userData);
        setUser(newUser.name);
        return newUser;
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