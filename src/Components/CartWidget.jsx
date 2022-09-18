import React, {  } from 'react'
import { useCart } from '../Contex/CartContex';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const CartWidget = () => {
  const{CartQuantity,cart} = useCart()
  return (
      <div>
          <ShoppingBagIcon color='primary' fontSize='large'/>
          <span>{CartQuantity()|| ''}</span>
          {/*<span>{!Cart.length ? '': CartQuantity( ) }</span>*/} 
      </div>
    )

  }
  
export default CartWidget

        {/* condicional tradicional if y else*/}
        {/* <span>{!cart.lenght ? '' : cartQuantity()  }</span> */}
        {/* condicional ternario if sin else */}
        {/* <span>{cart.lenght && cartQuantity()  }</span> */}