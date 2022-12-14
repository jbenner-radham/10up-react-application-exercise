import PropTypes from 'prop-types';
import React from 'react';
import { AuthContext } from '../auth';

function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    async function login(formData, callback) {
        const url = 'https://js1.10up.com/wp-json/jwt-auth/v1/token';
        const bodyObject = {
            username: formData.get('username'),
            password: formData.get('password')
        };
        const options = {
            body: JSON.stringify(bodyObject, null, 2),
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = {};

        try {
            response = await fetch(url, options);
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            response.ok = false;
            setUser(null);
        } finally {
            callback?.(response);
        }
    }

    function logout(callback) {
        setUser(null);
        callback?.();
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
