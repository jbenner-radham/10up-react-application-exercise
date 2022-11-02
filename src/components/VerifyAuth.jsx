import React, { useEffect } from 'react';
import { useAuth } from '../auth';

function VerifyAuth({ children }) {
    const { user, setUser, isTokenValid } = useAuth();

    useEffect(() => {
        if (user && !isTokenValid()) {
            setUser(null);
        }
    }, []);

    return children;
}

export default VerifyAuth;
