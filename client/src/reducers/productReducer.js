const initialState = {
    products: [],
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'PRODUCTS_FAIL':
            return { ...state, error: action.error };
        default:
            return state;
    }
};

export default productReducer;
