import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {
        if (user) navigate('/home');
    }, [user]);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        login(formData);
    }

    return (
        <div className="Login">
            <h1>
                Login
            </h1>

            <div className="login">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>{' '}
                        <input id="username" type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>{' '}
                        <input id="password" type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
