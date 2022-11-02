import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';

function RequireAuth({ children }) {
    const { user, isTokenValid } = useAuth();
    const location = useLocation();

    if (user && isTokenValid()) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
