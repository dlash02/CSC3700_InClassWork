import React, {useState} from 'react';
import {useAuth} from "./auth";
import {useNavigate, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
function Login(props) {
    const [user, setUser ] = useState();
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    const handleLogin = () => {
        auth.login(user);
        // navigate('/', {replace:true} );
        navigate( redirectPath, {replace:true} );
    }
    return (
        <div>
            <label>
                UserName: <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <Button onClick={handleLogin}> Login </Button>
        </div>
    );
}
export default Login;