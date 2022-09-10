import React,{ useState } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({productDetail}) => {
    const [counter, setCounter] = useState(1);
    const[compra,setCompra] = useState(false)
    const {id, name, describe, price, stock, img}= productDetail;
    const navegar = useNavigate()
    

    const onAdd = () => {
        console.log(`Se agregaron ${counter} items del producto ${name}`)
        setCompra(true)
    }
    
  return (
    <div style={{className:'text-danger', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h2 className='display-3'>Detalle de: {name}</h2>
        <img src={img} alt={name} style={{width:'25rem'}}/>
        <p>{describe}</p>
        <p className='text-header mb-3'>${price}</p>
        {!compra
       ? <ItemCount stock={stock} initial={1} onAdd={onAdd} counter ={counter} setCounter={setCounter}/>
       : <div> 
          <button className='btn btn-primary'onClick={()=>navegar('/cart')}>Ir al carrito</button>
         <button className='btn btn-danger mx-2'>Seguir comprando</button>
         
        </div>}
      </div>
  )
}

export default ItemDetail