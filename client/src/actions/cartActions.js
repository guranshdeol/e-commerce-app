import axios from 'axios';

export const getCart = () => async (dispatch, getState) => {
    try {
        const { auth: { token } } = getState();
        const { data } = await axios.get('/api/cart', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({ type: 'GET_CART_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'GET_CART_FAIL', payload: error.response.data.message });
    }
};

export const addItemToCart = (product) => async (dispatch, getState) => {
    try {
        const { auth: { token } } = getState();
        const { data } = await axios.post('/api/cart', product, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'ADD_TO_CART_FAIL', payload: error.response.data.message });
    }
};

export const removeItemFromCart = (productId) => async (dispatch, getState) => {
    try {
        const { auth: { token } } = getState();
        const { data } = await axios.delete(`/api/cart/${productId}`, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({ type: 'REMOVE_FROM_CART_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'REMOVE_FROM_CART_FAIL', payload: error.response.data.message });
    }
};
