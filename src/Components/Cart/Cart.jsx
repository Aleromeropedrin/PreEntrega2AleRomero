import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice, removeUnit, totalProducts } = useCartContext();
  const history = useHistory(); // Obtener el objeto de historial de navegación

  const handleRemoveUnit = (itemId) => {
    removeUnit(itemId);
  };

  const handleCheckout = () => {
    // Validar que el total de productos sea mayor que cero antes de permitir el pago
    if (totalProducts() > 0) {
      // Redirigir al usuario a la página de pago (o a la que desees)
      console.log('Redirigiendo al proceso de pago...');
      // En este ejemplo, redirige al inicio después de 2 segundos
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } else {
      // Mostrar una alerta si el total es cero
      alert('No puedes realizar el pago. El carrito está vacío. ¿Desea seguir comprando?');
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to="/">Hacer compras</Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <ItemCart item={item} />
              <button onClick={() => handleRemoveUnit(item.id)}>Eliminar 1 unidad</button>
            </div>
          ))}
          <p>Total: $ {totalPrice()>1}</p>
          <Link to="/checkout">
            <button className="btn-total" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default Cart;
