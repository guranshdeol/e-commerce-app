import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addItemToCart } from '../actions/cartActions';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (token) {
            dispatch(addItemToCart({ productId: product._id, quantity: 1 }));
        } else {
            // Redirect to login or show a message
        }
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
