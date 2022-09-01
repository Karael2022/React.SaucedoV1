import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Item = ({Productos}) => {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="180"
        width= "100"
        image={Productos.img}
        src={Productos.img}
        

      />
      
      <div
      style={{
        padding: '1rem',
        display: 'inline',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '12px'
      }}>
      
      
      </div>
      <div
      style={{
        marginBlockEnd:'1rem',
        marginInlineEnd:'0rem',
        padding: '1rem',
        display: 'inline',
        justifyContent: 'center',
        alignItems:'center',
      }}>
        <div size="small">{Productos.id}.-</div>
        <div size="medium">{Productos.nombre}</div>
        <div size="small">{Productos.describe}</div>
        <div size="medium" > $ {Productos.precio}</div>
        
      
        
      </div>
    </Card>
  );
}
 
    
  
export default Item