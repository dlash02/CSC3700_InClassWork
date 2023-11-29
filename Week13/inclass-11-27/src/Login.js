import React, {useState} from 'react';
import {useAuth} from "./auth";
import {useNavigate} from "react-router-dom";

function Login(props) {
    const [user, setUser ] = useState();
    const auth = useAuth();
    const history = useNavigate();

    const handleLogin = () => {
        auth.login(user);
        history('/');
    }
    return (
        <div>
            <label>

                UserName: <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}> Login </button>
        </div>
    );
}

export default Login;