import React from 'react';
import {useAuth } from "./auth";
import {useNavigate} from "react-router-dom";


function Profile(props) {
    const auth = useAuth();
    const history = useNavigate();

    const handleLogout = () => {

        auth.logout();
        history('/');
    }

    return (
        <div>
            <h2> Welcome to {auth.user} Profile</h2>
            <button onClick={handleLogout}> Logout </button>
        </div>
    );
}

export default Profile;