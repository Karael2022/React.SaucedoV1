//snipper rface
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'



const ItemListConteiner = () => {
      const[ListProducts, setListProducts] = useState([]) 
      const[loanding, setLoanding] = useState(false)


  



useEffect(()=>{
  setLoanding(true)
    data
    .then((res)=>
    setListProducts(res))
    .catch((error)=> console.log(error))
    .finally (() => setLoanding(false))
  },[])

  return (
    <div style={{padding:'3rem'}}>
      
      {loanding ?<p> Cargando....</p>: <ItemList ListProducts={ListProducts}/>}
    </div>
   )
}
export default ItemListConteiner

  // mok es una simulacion