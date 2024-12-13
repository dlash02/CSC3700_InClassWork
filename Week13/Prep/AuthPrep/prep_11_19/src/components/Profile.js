import React from 'react';
import {useAuth} from "./auth";
import {useNavigate} from "react-router-dom";
const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logOut();
        navigate("/");
    }
    return (
        <div>
            <h2> Inside my Profile</h2>
            <h3> Welcome User:{auth.user}</h3>
            <button onclick={handleLogout}> Logout </button>
        </div>
    );
};

export default Profile;