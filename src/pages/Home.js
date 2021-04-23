import React, { useEffect } from 'react';

// Components
import Products from '../container/Products';

// Hooks
import useOffer from '../hooks/useOffer.hook';

const Home = () => {
  const { getAllOffers, productsOffer } = useOffer();

  useEffect(() => {
    getAllOffers();
  }, [productsOffer]);

  return (
    <>
      {productsOffer.map((product) => (
        <Products key={product.id} {...product} />
      ))}
    </>
  );
};

export default Home;
