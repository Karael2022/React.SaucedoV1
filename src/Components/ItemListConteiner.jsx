//snipper rface
import React, {useState, useEffect} from 'react'
import { CustomFetch } from './CustomFetch'
import ItemList from './ItemList'
import Productos from './Productos'

const ItemListConteiner = (greeting) => {
      const[ListProductos, setListProductos] = useState([]) 
      
      
  useEffect(()=> {
    CustomFetch(Productos)
    .then(data => setListProductos(data))
  },[])
  console.log(ListProductos)
    //.catch()
    //.finally()
  
  return (
    <>
      <ItemList ListProductos={ListProductos}/>
      <div>{greeting}</div>
    </>
  )}

export default ItemListConteiner

