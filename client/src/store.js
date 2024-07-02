import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
