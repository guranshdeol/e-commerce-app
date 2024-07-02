import React from 'react';
import AuthForm from './AuthForm';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <AuthForm isLogin={false} />
        </div>
    );
};

export default Register;
