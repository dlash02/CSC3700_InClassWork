import React from 'react';

const About = () => {
    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remove token on logout
        window.location.href = '/login'; // Redirect to login page
    };
    return (
        <div>
            <h3> About page should be protected </h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default About;