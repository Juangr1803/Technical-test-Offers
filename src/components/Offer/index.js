import React from 'react';

import '../../styles/components/Offer.css';

const Offer = ({ name, id }) => {
  return (
    <section className="offer">
      <div className="offer__container">
        <h5 className="offer-container__name">{name}</h5>
        <p className="offer-container__identificator"> # {id}</p>
      </div>
    </section>
  );
};

export default Offer;
