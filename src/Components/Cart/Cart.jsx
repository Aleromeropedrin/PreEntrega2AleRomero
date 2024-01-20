import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import '../Item/item.css';

const Cart = () => {
  const { cart, totalPrice, removeUnit, removeProduct } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <ItemCart item={item} />
          <button onClick={() => removeUnit(item.id)}>Eliminar 1 unidad</button>
        </div>
      ))}
      <p>Total: $ {totalPrice()}</p>
      <Link to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;
