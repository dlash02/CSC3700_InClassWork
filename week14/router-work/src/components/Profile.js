import React from 'react';
import {useAuth} from "./auth";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function Profile(props) {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logOut();
        navigate('/');
    }
    return (
        <div>
         <h2> Welcome {auth.user} to your profile page </h2>
            <Button onClick={handleLogout}> Logout </Button>
        </div>
    );
}

export default Profile;