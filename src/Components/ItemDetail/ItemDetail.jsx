import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../item.css';

const ItemDetail = ({ item }) => {
  const [mostrarDetallesAdicionales, setMostrarDetallesAdicionales] = useState(false);

  if (!item) {
    return <div>Cargando...</div>;
  }

  const toggleDetallesAdicionales = () => {
    setMostrarDetallesAdicionales(!mostrarDetallesAdicionales);
  };

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>cantidad: {item.stock}</p>
        
        {/* Botón para mostrar/ocultar detalles adicionales */}
        <button onClick={toggleDetallesAdicionales}>
          {mostrarDetallesAdicionales ? 'Ocultar Detalles' : 'Mostrar Detalles Adicionales'}
        </button>

        {/* Detalles adicionales */}
        {mostrarDetallesAdicionales && (
          <div>
            <p>Detalles Adicionales: {item.detallesAdicionales}</p>
            {/* Agrega más detalles adicionales según sea necesario */}
          </div>
        )}

        {/* Botón para ver más detalles en una nueva ruta */}
        <Link to={`/ItemDetails/${item.id}`}>
          <button>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
