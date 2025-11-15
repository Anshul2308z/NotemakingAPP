import api from './api';

const authService = {
    // Register a new user 
    register : async ( userData ) => {
        const response = await api.post('/auth/register', userData);
        // response.data contains {_id, name, email, token}
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            // store only the user's name (primitive) to avoid storing response objects
            localStorage.setItem('user', JSON.stringify(response.data.name));
        }
        return response.data;
    },

    // Login existing user
    login : async ( credentials ) => {
        const response = await api.post('/auth/login', credentials);
        // response.data contains {_id, name, email, token}
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.name));
        }
        return response.data;
    },

    // Logout user
    logout : () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    // Get current logged in user
    getCurrentUser : () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    // Check if user is logged in 
    isLoggedIn : () => {
        return !!localStorage.getItem('token');
    },
};

export default authService ; 

// !! converts a value to it's boolean equivalent 

