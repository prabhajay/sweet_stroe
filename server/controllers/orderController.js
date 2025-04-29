const Order = require('../models/Order.js')
// Create a new order
const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
  } = req.body;

  try {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      user: req.user._id,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order' });
  }
};

module.exports = {
    createOrder
};