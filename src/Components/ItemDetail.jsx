import React,{ useState } from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contex/CartContex';

const ItemDetail = ({productDetail}) => {
    const [counter, setCounter] = useState(1);
    const[compra,setCompra] = useState(false)
    const {id, name, describe, price, stock, img}= productDetail;
    const navegar = useNavigate()
    const {addItem} = useCart()
    

    const onAdd = () => {
        //console.log(`Se agregaron ${counter} items del producto ${name}`)
        let purchase = {
          id,
          name,
          price,
          stock,
          img,
          quantity:counter
        }
        setCompra(true)
        addItem(purchase)
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
          
         <button className='btn btn-danger mx-2'onClick={()=>navegar('/')}>Seguir comprando</button>
         <button className='btn btn-primary'onClick={()=>navegar('/cart')}>Ir al carrito</button>
         
        </div>}
      </div>
  )
}

export default ItemDetail