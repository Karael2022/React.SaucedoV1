import { createContext, useContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

//FUNCION CON ITEM Y QUANTITY
//pasar item y contador
    const addItem2 = (item, cantidad) => {
        const purchase = {...item, quantity:cantidad}
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if(existsInCart){
                    const carritoActual = cart.map((prod)=>{
                        if(prod.id === item.id){
                            return {...prod, quantity:prod.quantity + cantidad}
                        }else{
                            return prod
                        }
                    })
                    setCart(carritoActual )
                }else{
                    setCart([...cart, purchase])
                }
       
    }
            //NO uso la forma 2 aun no la uso

    //FUNCION QUE RECIBE ITEM(RECIBE PURCHASE)
    const addItem = (item) => {
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if(existsInCart){
            const carritoActual = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(carritoActual )
        }else{
            setCart([...cart, item])
        }

    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id )
    }
    const CartQuantity = ()=>{
        return cart.reduce((acumul,prod) => acumul += prod.quantity, 0)
    }
    const CartTotal = () => {
        return cart.reduce((acumul,prod)=> acumul += prod.price * prod.quantity,0)

    }

    return(
        
        <CartContext.Provider value={{cart, clear, removeItem, isInCart, addItem, /*addItem2*/ CartQuantity,CartTotal }}>
            {children}
        </CartContext.Provider> 
            
    )}
    


export const useCart = () => useContext(CartContext)