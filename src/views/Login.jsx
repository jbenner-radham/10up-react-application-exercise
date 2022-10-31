import React from 'react';

function Login() {
    return (
        <div className="Login">
            <h1>
                Login
            </h1>

            <div className="login">
                <form method="post">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
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
