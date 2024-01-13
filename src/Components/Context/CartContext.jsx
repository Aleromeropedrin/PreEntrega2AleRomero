import React, { useState, useContext } from 'react';

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, currentItem) => prev + currentItem.quantity * currentItem.price, 0);
  };

  const totalProducts = () =>
    cart.reduce((accumulator, currentCartItem) => accumulator + currentCartItem.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((cartItem) => cartItem.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((cartItem) => cartItem.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;