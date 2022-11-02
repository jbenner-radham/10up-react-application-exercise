import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth';

function AuthProvider({ children }) {
    const [user, setUser] = React.useState();

    async function login(formData) {
        const url = 'https://js1.10up.com/wp-json/jwt-auth/v1/token';
        const options = {
            body: formData,
            method: 'POST',
            mode: 'cors'
        };
        const response = await fetch(url, options);
        const userData = await response.json();

        setUser(userData);
    }

    function logout() {
        setUser(null);
    }

    const value = { user, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
