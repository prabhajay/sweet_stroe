// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle order submission
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Shipping Address"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
        required
      />
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="PayPal">PayPal</option>
        <option value="CreditCard">Credit Card</option>
      </select>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
