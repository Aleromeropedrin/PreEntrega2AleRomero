
import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.Descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <p>Stock: {item.stock}</p>
      
    </div>
  );
};

export default Item;