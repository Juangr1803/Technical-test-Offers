import React from 'react';

import CharacteristicsProperties from '../properties';

const CharacteristicsItem = ({
  name,
  type,
  validFor,
  value,
  properties,
  displayValue,
}) => {
  return (
    <>
      <p className="item-characteristic">{name}</p>
      <p className="item-characteristic">{type}</p>
      <p className="item-characteristic">{value ? value : 'Ninguno'}</p>
      <p className="item-characteristic">
        {displayValue ? displayValue : 'Ninguno'}
      </p>
      {properties ? (
        <CharacteristicsProperties properties={properties} />
      ) : (
        <p className="item-characteristic">Ninguno</p>
      )}
      <p className="item-characteristic">{validFor.startDateTime}</p>
    </>
  );
};

export default CharacteristicsItem;
