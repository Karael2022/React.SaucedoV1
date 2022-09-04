import React, {useState, useEffect} from 'react'
import ItemListConteiner from '../ItemListConteiner';



/*function Producto({item, price, quantity}){ 
  //console.log('imprimi en la pantalla el Producto1') lo comento ya no es necesario
   //let counter = 0; // variable comun

   const [counter, setCounter] = useState(0); // declaro el useState (desde donde arranco)
   
   // montaje 
   useEffect (() =>{
    console.log ('creando useeffect');
   }, []); // solo 1 vez cuando se monta el componente
   
   /en cada renders (vida) cambios cualquiera  
   useEffect (() =>{
    console.log ('mientras viva el componente');
    
    }   ); // sin el array. siempre se ejecuta

    //cuando cambia contador1
    useEffect (() => {
      console.log ('siempre que cambie contador1');
      
      },[contador1]); 
   
    //cuando cambia contador2
    useEffect (() => {
      console.log ('siempre que cambie contador2');
      
      },[contador2]);  

   //en cada renders (fin)  
  useEffect (() =>{
    return ()=>{
      console.log('fin del componente')
    } 
    
  },[]); // fin 

  return (
    <div>
      <h3>counter: {counter}</h3>
      <button
        onClick={()=> {
          //contador = contador +1; (es lo mismo que hacer set(..))
          setCounter(counter + 1); 
          //console.log(counter);
        }}
      >
        counter
      </button>
        
                
    <div>{item.id}</div>
    <div>{item.name}</div>
    <div>precio ${item.price}</div>
    </div>
  );
}

export default Producto*/