import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from "./Logout";

function ProfileV2() {

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Welcome to your profile V2!</p>
            <Logout />
        </div>
    );
}

export default ProfileV2;

