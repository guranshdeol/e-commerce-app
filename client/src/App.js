import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/products/:id" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
