import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../actions/authActions';

const AuthForm = ({ isLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '', username: '' });
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (isLogin) {
            dispatch(login(formData));
        } else {
            dispatch(register(formData));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
            )}
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
    );
};

export default AuthForm;
