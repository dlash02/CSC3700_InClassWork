import React from 'react';
import {useAuth} from "./auth";
import {Navigate, useLocation} from 'react-router-dom'

export const  RequireAuth = ( {children }) => {
    const auth = useAuth();
    const location = useLocation();
    console.log("location="); console.log( location);
    if (!auth.user ){
        return <Navigate to="/login" state={{path: location.pathname}} />
    }
    return children;

}
export default RequireAuth;