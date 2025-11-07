// API Service Layer
// This centralizes all API calls and handles authentication headers.


import axios from 'axios';

// Get api base URL from environment variables
const API_URL = 'http://localhost:5000/api';

// Create axios instance with base configuration
const api = axios.create({
    baseURL : API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - adds token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if ( token ) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config ; 
    },
    ( error ) => {
        return Promise.reject( error ) ; 
    }
);

// Response interceptor - handles responses and errors globally
api.interceptors.response.use(
    (response) => response, 
    (error) => {
        if ( error.response?.status === 401){
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject( error ) ;
    }
);

export default api ; 

/* 
    What's happening?
        axios.create(): Creates a configured instance of axios
        Request interceptor: Automatically adds JWT token to every request
        Response interceptor: Handles 401 errors globally (logs user out if token expires)
*/