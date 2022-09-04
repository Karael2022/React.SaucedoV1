import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import ItemListConteiner from './ItemListConteiner';



const Item = ({Products}) => {
  const{img,name, describe, price,stock,id}= Products
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt="reloj"
        height="180"
        width= "150"
        img={Products.img}
        src={Products.img}
        

      />
      
      <div
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '25px'
      }}>
      
      
      </div>
      <div
      style={{
        marginBlockEnd:'1rem',
        marginInlineEnd:'0rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
      }}>
        
        <div size="medium text">{Products.name}</div>
        <div size="small">{Products.describe}</div>
        <div size="medium" > $ {Products.price}</div>
        
      
        
      </div>
    </Card>
  );
}
 
    
  
export default Item