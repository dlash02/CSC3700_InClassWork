import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import {useNavigate} from "react-router-dom";

function LoginV2() {
    const [username, setUsername] = useState('');
    const [loginUrl, setLoginUrl] = useState(null);
    const navigate = useNavigate();

    const { data, isPending, error } = useFetch(loginUrl);
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            if (data.authenticated) {
                localStorage.setItem('authToken', 'admin123');  // Set specific token
                alert('Login successful! Navigate!');
                console.log("Navigate to Profile");
                navigate('/profile'); // Redirect to profile
            } else {
                alert('Invalid login');
                setLoginUrl(null); // Reset to prevent continuous fetch
            }
        }
    }, [data, navigate]);

    const handleLogin = () => {
        if (username) {
            // Include username in the URL or consider using POST request
            setLoginUrl(`http://localhost:3333/login?username=${username}`);
        } else {
            alert('Please enter a username');
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
export default LoginV2;
