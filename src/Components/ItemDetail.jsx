import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
    const {id, name, describe, price, stock, img}= productDetail

    const onAdd = () => {
        console.log('Compra Realizada')
    }
    
  return (
    <div style={{
      display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2 className='display-3'>Detalle de: {name}</h2>
        <img src={img} alt={name} style={{width:'25rem'}}/>
        <p>{describe}</p>
        <p className='text-dark'>${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail