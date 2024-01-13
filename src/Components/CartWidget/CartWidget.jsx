import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useCartContext } from '../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <div className="container">
      <button>
        <BsFillCartCheckFill />
        {totalProducts() !== null && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalProducts()}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartWidget;