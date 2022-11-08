import PropTypes from 'prop-types';
import React from 'react';
import { AuthContext } from '../auth';

function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

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

    async function isTokenValid() {
        if (!user?.token) return false;

        const url = 'https://js1.10up.com/wp-json/jwt-auth/v1/token/validate';
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const response = await fetch(url, options);
        const validationData = await response.json();

        return validationData?.code === 'jwt_auth_valid_token' && validationData?.data?.status === 200;
    }

    const value = { user, login, logout, isTokenValid };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default AuthProvider;
