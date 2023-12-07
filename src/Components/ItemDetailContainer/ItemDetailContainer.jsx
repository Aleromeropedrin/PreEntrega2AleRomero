import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProducto from '../Json/arrayProducto.json';


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simula una demora de 2 segundos antes de resolver la promesa
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = arrayProducto.find((item) => item.id == parseInt(id));
        setItem(data);
      } catch (error) {
        
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        
          <ItemDetail item={item} />
      
      </div>
    </div>
  );
};

export default ItemDetailContainer;
