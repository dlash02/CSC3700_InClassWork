import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import {useNavigate, useLocation} from "react-router-dom";

function LoginV3() {
    const [username, setUsername] = useState('');
    const [loginUrl, setLoginUrl] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const { data, isPending, error } = useFetch(loginUrl);

    // Handle login response when data changes
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            if (data.authenticated) {
                localStorage.setItem('authToken', 'admin123');  // Set specific token
                alert('Login successful! Navigate!');

                // Determine where to navigate based on previous location
                const from = location.state?.from?.pathname || '/profile';
                alert( from );
                navigate(from, { replace: true });
            } else {
                alert('Invalid login');
                setLoginUrl(null); // Reset to prevent continuous fetch
            }
        }
    }, [data, navigate, location]);

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
export default LoginV3;
