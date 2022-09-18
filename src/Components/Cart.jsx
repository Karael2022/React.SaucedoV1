import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Contex/CartContex'
import CartItem from './CartItem'

const Cart = () => {
  //forma extensa de llamar a contex
  //const{cart} =useContext(CartContex)
  const {cart, CartTotal,clear}=useCart()
  const navegar = useNavigate() 
  console.log(cart)
    
   return (
      
      <div>
        {
          !cart.length 
          ?<div>
            <h2>Tu carrito esta vacio</h2>
            <h4> Ver mas</h4>
            <button onClick={() => navegar('/')}>Ir a Comprar</button>
          </div>
          :<div>
            <h2>Tu Carrito</h2>
            {cart.map((compra) => <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar : ${CartTotal()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
            <button className='btn btn-success'>Terminar compra</button>
            </div>
        </div>
      }
    </div>
  )
}
export default Cart

