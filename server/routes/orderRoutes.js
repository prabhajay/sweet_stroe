
const express = require('express');
const {createOrder} = require('../controllers/orderController.js');
const {authMiddleware} = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', authMiddleware, createOrder);

module.exports = router;
