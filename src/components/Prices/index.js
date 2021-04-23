import React from 'react';

// Component
import PricesItem from './item';

import '../../styles/components/Prices.css';

const Prices = ({ productOfferingPrices }) => {
  return (
    <section className="prices-container">
      {productOfferingPrices &&
        productOfferingPrices.map((prices) => (
          <PricesItem key={prices.id} {...prices} />
        ))}
    </section>
  );
};

export default Prices;
