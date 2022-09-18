import Button from '@mui/material/Button';
import * as React from 'react';



export default function ItemCount({stock, initial, onAdd,counter,setCounter}) {
  
  
  const sumar = () => {
    console.log('sumo')
    if (counter < stock) {
      setCounter(counter +1);
      
    }
  };
  const resta =() => {
    console.log('resto')
    if (counter > 0){
      setCounter(counter - 1);
      
    }
  };

  return (
   <>
      
      
     
        
      <div>   
        <Button size="medium" onClick={resta}>-</Button>
        <span>{counter}</span>
        <Button size="medium" onClick={sumar}>+</Button>
        
        
      </div>
      <Button size="small" onClick={onAdd}>comprar</Button>
      </>
  )
}
