import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove token on logout
        navigate('/login'); // Navigate to login page
    };

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome to your profile!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;

