import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginV3 from './LoginV3';
import ProfileV2 from './ProfileV2';
import AboutV2 from './AboutV2';

function ProtectedRoute({ children }) {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('authToken') === 'admin123';
    if (!isAuthenticated) {
        // Redirect to login and remember where they were trying to go
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
function AppWMultProtected() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginV3 />} />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfileV2 />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about"
                element={
                    <ProtectedRoute>
                        <AboutV2 />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default AppWMultProtected;