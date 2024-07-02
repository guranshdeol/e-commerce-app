import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            dispatch({ type: 'SET_PRODUCTS', payload: data });
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <img src={product.imageUrl} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
