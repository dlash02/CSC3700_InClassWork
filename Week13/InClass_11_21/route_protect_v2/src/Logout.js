// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove token on logout
        navigate('/login'); // Use React Router for navigation
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;