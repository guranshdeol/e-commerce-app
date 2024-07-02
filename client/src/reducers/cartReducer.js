const initialState = {
    cartItems: [],
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cartItems: [...state.cartItems, action.item] };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productId !== action.productId),
            };
        case 'SET_CART':
            return { ...state, cartItems: action.cartItems };
        case 'CART_FAIL':
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default cartReducer;
