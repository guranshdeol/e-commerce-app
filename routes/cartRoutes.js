const express = require('express');
const { getCart, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getCart);
router.post('/', verifyToken, addItemToCart);
router.delete('/:id', verifyToken, removeItemFromCart);

module.exports = router;
