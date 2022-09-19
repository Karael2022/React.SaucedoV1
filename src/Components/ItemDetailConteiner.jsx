import { collection, doc, getDoc, } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../mocks/mockData'
import ItemDetail from './ItemDetail'
import {db} from '../FireBase/FireBase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

  useEffect(()=> {
    //decimos cual es nuestra base de datos y en que coleccion esta
    const coleccionProductos = collection(db,"Products")
    // hacer referencia que me traia el ID
    const referenciaDoc = doc(coleccionProductos,id)

    //traigo un documento
    getDoc(referenciaDoc)
    .then ((respuesta)=>{
      setProductDetail({
        id: respuesta.id,
        ...respuesta.data()
      })
    })
    .catch ((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[])



    {/*useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])*/}
   
  return (
    <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer

//find devuelve la 1ra coincidencia
//filter devuelve un array (filtro de items)