import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import {db} from '../FireBase/FireBase'
import { useCart } from '../Contex/CartContex'
import { useNavigate } from 'react-router-dom'

const Comprar = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, CartTotal,clear}=useCart()
    const navigate = useNavigate()
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
 
    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
           setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: CartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }
    if(loader){
        return <p>Cargando aguarde...</p>
    }
  return (
    <div>
       {!orderId 
       ?<div>
       <h2>Su compra</h2>
        <h4>Por favor complete todos los campos</h4>
        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
            <div class="mb-3">
                <label  className="form-label">Nombre Completo</label>
                <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
            </div>
            <div class="mb-3">
                <label  className="form-label">Numero de telefono</label>
                <input className="form-control"  type="number" placeholder='011587892545' name="phone"  onChange={datosComprador} />
            </div>
            <div class="mb-3">
                <label  className="form-label">E-mail</label>
                <input className="form-control" type="email" placeholder='pepe@gmail.com' name="email"  onChange={datosComprador}/>
            </div>
            <button className="btn btn-primary" type='submit'>Finalizar Compra</button>
            {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
       </form>
        
       </div>
       :
       <div >
        <h2 style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop: '10px'}}>Muchas gracias por su compra!</h2>
        <h4 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Su orden es: {orderId}</h4>
        <button className="btn btn-success" justifyContent="center" onClick={()=> navigate('/')}>Volver</button>
       </div>}
    </div>
  )
}

export default Comprar



