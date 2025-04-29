// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details for ID: {id}</h2>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
