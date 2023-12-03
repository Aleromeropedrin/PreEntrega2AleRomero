import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProducto.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <ItemDetail item={item} /> {/* Cambiado a 'item' */}
      </div>
    </div>
  );
};

export default ItemDetailContainer;