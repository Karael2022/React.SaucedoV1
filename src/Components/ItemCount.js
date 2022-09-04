import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import { useState } from 'react';



export default function ItemCount({stock, initial, onAdd}) {
  const [counter, setCounter] = useState(initial);
  
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
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        /*component="img"
        alt="Gtr3"
        height="140"
        width= "10"
        image={reloj}
        src={reloj}*/
        

      />
      
      <div
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '12px'
      }}>
      <div>{counter}</div>
      
      </div>
      <div
      style={{
        marginBlockEnd:'1rem',
        marginInlineEnd:'0rem',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
      }}>
        <Button size="medium" onClick={resta}>-</Button>
        <Button size="small" onClick={onAdd}>comprar</Button>
        <Button size="medium" onClick={sumar}>+</Button>
      
        
      </div>
    </Card>
  );
}
