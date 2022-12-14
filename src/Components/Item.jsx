import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom'




const Item = ({Products}) => {
  const{id,img,name, describe, price,stock}= Products
  const navegar = useNavigate()
  return (
    
   <Card className='card' sx={{ maxWidth: 341 }}>
      <CardMedia
        component='img'
        alt="reloj"
        height="286"
        width= "100"
        img={Products.img}
        src={Products.img}
        

      />
      
      <div
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '12px',
                
      }}>
      
      
    </div>
    
      <div
      style={{
        
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
                
      }}>
        
        <div size="medium text" className=''>{Products.name}</div>
        <div size="small">{Products.describe}</div>
        <div size="medium" className='text-black'> $ {Products.price}</div>
        <button className='btn btn-success' onClick={()=>navegar(`/detalle/${id}`)}>Ver mas</button>
      {/* Navegacion con un boton  */}
      {/*<button className='btn btn-primary' onClick={()=>navegar(`/detalle/${id}`)}>Ver más</button>*/}
     {/* Navegacion con un link  */}
    {/* <Link to={`/detalle/${id}`}>Ir al detalle</Link> */}
        {/* Navegacion con boton y link (no recomendado) */}
        {/* <Link  to={`/detalle/${id}`}>
          <button className='btn btn-primary'>Ver más</button> 
        </Link> */}
        
      </div>
      </Card>
    
      
  );
}
 
    
  
export default Item