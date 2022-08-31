import React from 'react'

const Item = ({Productos}) => {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Gtr3"
        height="140"
        width= "10"
        image={reloj}
        src={reloj}
        

      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Amazfit GTR 3i
        </Typography>
        <Typography variant="body2" color="text.secondary">
        El Amazfit GTR 3 ofrece un panel enorme y muy bien cuidado que además de verse genial
        en cualquier tipo de situación todo se ve muy nítido, vibrante y lo mejor: 
        a un tamaño considerable.
        </Typography>
      </CardContent>
      <div
      style={{
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: '12px'
      }}></div>
    <div
    style={{
        marginBlockEnd:'1rem',
        marginInlineEnd:'0rem',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
      }}>
    {Productos.nombre}
    {Productos.precio}
    {Productos.img}
    </div>
    
  )
}

export default Item