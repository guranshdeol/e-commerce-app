const initialState = {
    token: null,
    error: null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
            return { ...state, loading: false, token: action.token };
        case 'AUTH_FAIL':
            return { ...state, loading: false, error: action.error };
        case 'AUTH_LOGOUT':
            return { ...state, token: null };
        default:
            return state;
    }
};

export default authReducer;
