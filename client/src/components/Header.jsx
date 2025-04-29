// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/order-history">Order History</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
