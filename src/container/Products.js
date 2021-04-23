import React, { useEffect } from 'react';

// Components
import Offer from '../components/Offer';
import Prices from '../components/Prices';
import Characteristics from '../components/Characteristics';

// Styles
import '../styles/container/Products.css';

const Products = ({ versions }) => {
  return (
    <>
      {versions.map((version) => (
        <div key={version.id} className="product-container">
          <Offer {...version} />
          <Prices {...version} />
          <Characteristics {...version} />
        </div>
      ))}
    </>
  );
};

export default Products;
