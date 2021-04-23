import { useState, useEffect } from 'react';

// Data offer
import offers from '../api/ofertas.json';

const useOffer = () => {
  const [productsOffer, setProductsOffer] = useState([]);

  const getAllOffers = () => {
    setProductsOffer(offers);
  };

  return { getAllOffers, productsOffer };
};

export default useOffer;
