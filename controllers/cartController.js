const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.addItemToCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        const { productId, quantity } = req.body;

        if (cart) {
            const productIndex = cart.products.findIndex(p => p.productId == productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
            await cart.save();
            res.status(200).json(cart);
        } else {
            const newCart = new Cart({ userId: req.user.id, products: [{ productId, quantity }] });
            await newCart.save();
            res.status(201).json(newCart);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.removeItemFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        const productIndex = cart.products.findIndex(p => p.productId == req.params.id);
        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
