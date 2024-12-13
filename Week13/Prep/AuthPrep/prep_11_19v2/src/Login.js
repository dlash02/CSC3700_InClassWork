import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
   const [username, setUsername] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const handleLogin = () => {
       if ( username === 'admin123'){
           localStorage.setItem('authToken', 'admin123');
           navigate('/profile');
       } else {
           alert("Invalid username. Please enter admin123.");
           setError("Invalid username. Please enter admin123.");
       }
   }
    return (
        <div>
            <h2>Welcome to Login</h2>
            <input type='text' placeholder='Enter login'
                   value={username}
                   onChange={(e) => {
                       setUsername(e.target.value)
                       setError("");
                   }
                   }
            />
            <button onClick={handleLogin}> Login</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    );
}

export default Login;
