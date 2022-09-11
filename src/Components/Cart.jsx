import React from 'react'
import { useContext } from 'react'
import { CartContex } from '../Contex/CartContex'
import { useCart } from '../Contex/CartContex'

function Cart() {
  //forma extensa de llamar a contex
  //const{cart} =useContext(CartContex)
  const {cart}=useCart()
  console.log('carrrito',cart)
  return (
    <div>Hola estas en CArt!!</div>
  )
}

export default Cart

