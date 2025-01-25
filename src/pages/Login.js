import React from 'react';
import "../styles/Style.css"

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <input type="submit" value="Login" />
            </form>
            <a href="/register" className="register-link">Don't have an account? Register here</a>
        </div>
    );
};

export default Login;