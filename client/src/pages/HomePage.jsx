// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const sweets = [
    { _id: '1', name: 'Gulab Jamun', price: 10 },
    { _id: '2', name: 'Rasgulla', price: 12 },
  ];

  return (
    <div>
      <h1>Welcome to the Sweet Store</h1>
      <Header />
      <p>Login</p>
      <p>Register</p>
      <img src alt="image" />
      <ul>
        {sweets.map((sweet) => (
          <li key={sweet._id}>
            <Link to={`/product/${sweet._id}`}>{sweet.name}</Link> - ${sweet.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
