import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeItemFromCart } from '../actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        if (token) {
            dispatch(getCart());
        }
    }, [dispatch, token]);

    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                {cart.map(item => (
                    <div key={item.productId}>
                        <h2>{item.productId.name}</h2>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(removeItemFromCart(item.productId._id))}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
