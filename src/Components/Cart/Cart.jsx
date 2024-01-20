import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import '../Item/item.css';
import ErrorMessage from '../ErrorMessage'; 

const Cart = () => {
  const { cart, totalPrice, removeUnit, removeProduct, totalProducts } = useCartContext();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCheckout = () => {
    // Validar que el total de productos sea mayor que cero antes de permitir el pago
    if (totalProducts() > 0) {
      // Redirigir al usuario a la página de pago
      // Puedes utilizar react-router-dom o cualquier otra lógica de navegación
      // En este ejemplo, simplemente se imprime un mensaje en la consola
      console.log('Redirigiendo al proceso de pago en Ferretería Avenida...');
    } else {
      // Mostrar un mensaje si el total es cero
      setErrorMessage('El carrito está vacío. ¿Desea agregar productos antes de comprar en Ferretería Avenida?');
    }
  };

  const closeErrorMessage = () => {
    setErrorMessage(null);
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <ItemCart item={item} />
          <button onClick={() => removeUnit(item.id)}>Eliminar 1 unidad</button>
        </div>
      ))}
      <p>Total: $ {totalPrice()}</p>
      <button className="btn-total" onClick={handleCheckout}>
        Finalizar Compra
      </button>

      {errorMessage && (
        <ErrorMessage message={errorMessage} onClose={closeErrorMessage} />
      )}
    </>
  );
};

export default Cart;
