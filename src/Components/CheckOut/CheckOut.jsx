import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import '../CheckOut/CheckOut.css';

export const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const { cart, totalPrice, removeProduct } = useCartContext();

  const showToast = (message) => {
    Toastify({
      text: message,
      duration: 4000,
      close: true,
      gravity: 'top',
      position: 'center',
      stopOnFocus: true,
      style: {
        color: '#000000',
        background: 'linear-gradient(to right, #ff8c00, #fbc056)',
        borderRadius: '1rem',
        textTransform: 'uppercase',
        fontSize: '.75rem',
      },
      onClick: function () {},
    }).showToast();
  };

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos requeridos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los email no coinciden');
      return;
    }

    const total = totalPrice();
    const orden = {
      products: cart.map((producto) => ({
        id: producto.id,
        nombre: producto.title,
        cantidad: producto.quantity,
      })),
      total: total,
      fecha: serverTimestamp(),
      nombre,
      apellido,
      telefono,
      email,
    };

    try {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, 'orders'), orden);

      // Obtén la referencia del documento del producto y actualiza el stock
      for (const producto of cart) {
        const productRef = doc(db, 'products', producto.id);

        await runTransaction(db, async (transaction) => {
          const productDoc = await transaction.get(productRef);

          if (!productDoc.exists()) {
            throw new Error('El producto no existe en la base de datos.');
          }

          const currentStock = productDoc.data().stock;
          const newStock = currentStock - producto.quantity;

          if (newStock < 0) {
            throw new Error(
              'No hay suficiente stock disponible para este producto.'
            );
          }

          transaction.update(productRef, { stock: newStock });
        });
      }

      setOrdenId(docRef.id);
      removeProduct();

      // Lógica para mostrar la alerta al finalizar la compra con el número de orden
      showToast(`Compra realizada con éxito. Número de orden: ${docRef.id}`);
    } catch (error) {
      console.log('No se pudo crear la orden', error);
      setError('Error en la orden');
    }

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
  };

  return (
    <div>
      <h2> Complete el formulario para confirmar la compra </h2>
      <form onSubmit={manejadorFormulario}>
        <div>
          <label className="lab-check">Nombre:</label>
          <input
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="lab-check">Apellido:</label>
          <input
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label className="lab-check">Telefono:</label>
          <input
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label className="lab-check">Email:</label>
          <input
            className="input-check"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="lab-check">Confirmar email</label>
          <input
            className="input-check"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            ¡Gracias por tu compra ! Tu numero de seguimiento es: <br /> {''}{' '}
            {ordenId} {''} <br />
          </p>
        )}

        <div>
          <button type="submit" disabled={totalPrice() === 0}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
