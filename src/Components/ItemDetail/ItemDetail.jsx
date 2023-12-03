import React from 'react'

const ItemDetail = ({ittem}) => {
  return (
    <div className='row'>
        <div className='col-md-4 iifset-md-4'>
            <img src={item.imagen} classname='img-fluid' alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>$ {item.precio}</p>
            <p>cantidad: {item.stock}</p>
        </div>
    </div>
  )
}

export default ItemDetail