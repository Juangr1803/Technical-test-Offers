import React from 'react';

import CharacteristicsItem from './item';

import '../../styles/components/Characteristics.css';

const Characteristics = ({ characteristics }) => {
  return (
    <section className="characteristics-container">
      <h4 className="characteristics__table-header">Nombre</h4>
      <h4 className="characteristics__table-header">Tipo</h4>
      <h4 className="characteristics__table-header">Valor</h4>
      <h4 className="characteristics__table-header">Monitor</h4>
      <div className="characteristics__table-header properties-header">
        Propiedades
        <div className="characteristics__table-header values-properties">
          <p>Seleccionado</p>
          <p>Valor</p>
        </div>
      </div>
      <h4 className="characteristics__table-header">Fecha</h4>
      {characteristics.map((characteristic) => (
        <>
          {characteristic.versions.map((version, i) => (
            <CharacteristicsItem key={version.id} {...version} />
          ))}
        </>
      ))}
    </section>
  );
};

export default Characteristics;
