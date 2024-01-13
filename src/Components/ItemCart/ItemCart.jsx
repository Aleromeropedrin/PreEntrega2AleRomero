import React from 'react';
import { useCartContext } from '../Context/CartContext';
import './ItemCart.css';

const ItemCart = ({ item }) => {
  const { removeProduct } = useCartContext();

  if (!item) {
    console.log('Item no definido en ItemCart');
    return null; // Puedes devolver algo diferente o simplemente no renderizar nada si item no está definido
  }

  console.log('Item en ItemCart:', item);

  return (
    <div className="itemCart">
      {item.img && <img src={item.img} className="img-fluid" alt={item.title} />}
      <div>
        <p>Título: {item.title}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio u.: $ {item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
        <button onClick={() => removeProduct(item.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;

