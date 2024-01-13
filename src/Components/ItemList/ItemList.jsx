import React from 'react'
import Item from '../Item/Item'
import '../Item/Item.css'

const ItemList = ({ products }) => {
  return (
    <div className='row' id='itemlist'>
      {
      products.map(item=>
      
      <div className='col-md-3'
       key={item.id}>
       <Item item={item}/> 
       </div>
      )   
      }
   </div>
  )
}

export default ItemList