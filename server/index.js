const express = require('express');
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');


const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes=  require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');

dotenv.config();
const app =express();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);


app.get("/",(req,res)=>{
    res.send("<h1 style=text-align:center;color:purple;>Welcome to Sweet store API</h1>");
})


app.listen(PORT,()=>{
    console.log(`API stared on port ${PORT}`)
})