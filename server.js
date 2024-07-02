const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Use Auth Routes
app.use('/api/auth', authRoutes);
//Use Product Routes
app.use('/api/products', productRoutes);
//Use Cart Routes
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
