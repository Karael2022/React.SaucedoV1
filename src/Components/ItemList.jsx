import React from 'react'
import Item from './Item'
import Productos from './Productos'




const ItemList = ({ ListProductos }) => {
    return (
      <section className="text-center">
        {ListProductos.map((Productos) => {
          return <Item 
          key ={Productos.id}
          Productos={Productos} />;
        })}
      </section>
    );
  };
  export default ItemList;