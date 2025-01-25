import React from 'react';
import "../styles/Style.css"

const Register = () => {
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form action="/register" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <input type="submit" value="Register" />
            </form>
            <a href="/login" className="login-link">Already have an account? Login here</a>
        </div>
    );
};

export default Register;