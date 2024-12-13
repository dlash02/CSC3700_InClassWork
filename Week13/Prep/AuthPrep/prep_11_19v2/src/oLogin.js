import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(''); // State for error messag
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin123') {
            localStorage.setItem('authToken', 'admin123'); // Set the correct token value
            navigate('/profile'); // Redirect to profile
        } else {
            alert('Invalid username. Please enter admin123.');
            setError('Invalid username. Please enter admin123.'); // Set error message
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    setError(''); // Clear error when typing
                    }}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </div>
    );
}

export default Login;
