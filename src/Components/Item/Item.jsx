
import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
  return (
    
      <Link to= {'/item/' + item.id} className= 'text-decoration-none' >
    <div className='container'>
      <div className='card border border-0'></div>
        <img src={item.imagen} className='card-img-top' alt={item.nombre} />
      <div className='card-body text-center'> 
        <p children= 'card-text' ><h3>{item.nombre}</h3></p>
        <p>{item.Descripcion}</p>
        <p>Precio: ${item.precio}</p>
        <p>Stock: {item.stock}</p>
        </div>
      
    </div>
    </Link>
  )
}

export default Item;