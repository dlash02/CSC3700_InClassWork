import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginV3 from './LoginV3';
import Profile from './Profile';
import About from './About';

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
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about"
                element={
                    <ProtectedRoute>
                        <About />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default AppWMultProtected;