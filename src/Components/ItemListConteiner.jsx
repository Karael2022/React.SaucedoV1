//snipper rface
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'



const ItemListConteiner = () => {
      const[ListProducts,setListProducts ] = useState([]) 
      const[loanding, setLoanding] = useState(false)
      const{categoryId} = useParams()

  
useEffect(()=>{
  setLoanding(true)
    data
    .then((res)=>{
      if(categoryId){
        setListProducts(res.filter((item)=> item.category === categoryId))
      }else{
        setListProducts(res)
      }
    })
    .catch((error)=> console.log(error))
    .finally (() => setLoanding(false))
  },[categoryId])

  return (
    <div style={{padding:'3rem'}}>
      
      {loanding ?<p> Cargando....</p>: <ItemList ListProducts={ListProducts}/>}
    </div>
   )
}
export default ItemListConteiner

  // mok es una simulacion