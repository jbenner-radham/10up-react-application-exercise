import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import VerifyAuth from '../components/VerifyAuth';

function Login() {
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const { login, user } = useAuth();

    document.title = '10up Blog - Login';

    useEffect(() => {
        if (user) navigate('/home');
    }, [user]);

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        login(formData, (response) => {
            if (response.status === 403) setLoginError('Your login information was not accepted.');
            else if (!response.ok) setLoginError('Sorry, an unexpected error occurred.');
        });
    }

    return (
        <div className="Login">
            <VerifyAuth />

            <h1>
                Login
            </h1>

            <div className="login">
                {loginError && <div className="login-error" role="alert" aria-live="polite">
                    <p>{loginError}</p>
                </div>}

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
