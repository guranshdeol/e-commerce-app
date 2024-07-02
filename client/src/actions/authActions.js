import axios from 'axios';

export const register = (userData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};
