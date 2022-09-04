import React from 'react'
import Item from './Item'




 
const ItemList = ({ ListProducts }) => {
    return (
      <section 
       className= "CardContainer">
        {ListProducts.map((Products) => 
         <Item key ={Products.id} Products={Products} />
        )}
      </section>
    )
  }
  export default ItemList