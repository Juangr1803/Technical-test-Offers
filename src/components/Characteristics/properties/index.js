import React from 'react';

const CharacteristicsProperties = ({ isSelected, value, properties }) => {
  return (
    <div className="properties-container">
      {properties.map((propertie, i) => (
        <div className="item-properties" key={i}>
          <p className="item-characteristic">
            {propertie.isSelected ? 'Si' : 'No'}
          </p>
          <p className="item-characteristic">
            {propertie.value ? propertie.value : 'Ninguno'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CharacteristicsProperties;
