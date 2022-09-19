//snipper rface
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import {data} from '../mocks/mockData'
import { useParams } from 'react-router-dom'
import {db} from '../FireBase/FireBase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListConteiner = () => {
      const[ListProducts,setListProducts ] = useState([]) 
      const[loanding, setLoanding] = useState(false)
      const{categoryId} = useParams()

//firebase
useEffect(()=>{
  setLoanding(true)
  const productos = categoryId ? query(collection(db,"Products"), where("category", "==", categoryId) ) : collection(db, "Products")
  getDocs(productos)
  .then ((result)=>{
    const lista = result.docs.map((Products) =>{
      return {
        id:Products.id,
        ...Products.data()
      }
    })
    setListProducts(lista)
  })
  .catch ((error) => console.log (error))
  .finally (() => setLoanding(false))
}, [categoryId])



//este llamado se hace con mock.  
{/*useEffect(()=>{
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
  },[categoryId])*/}

  return (
    <div style={{padding:'3rem'}}>
      
      {loanding ?<p> Cargando....</p>: <ItemList ListProducts={ListProducts}/>}
    </div>
   )
}
export default ItemListConteiner

  // mok es una simulacion