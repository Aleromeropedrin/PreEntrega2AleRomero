import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div>Cargando...</div>;
  }
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>cantidad: {item.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
