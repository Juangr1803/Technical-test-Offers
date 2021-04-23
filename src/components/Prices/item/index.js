import React from 'react';

const PricesItem = ({ versions, id }) => {
  return (
    <>
      {versions.map((version) => (
        <div key={version.id} className="item-prices">
          <h4 className="item-prices__name">{version.name}</h4>
          <p className="item-prices__price">$ {version.price.amount}</p>
        </div>
      ))}
    </>
  );
};

export default PricesItem;
