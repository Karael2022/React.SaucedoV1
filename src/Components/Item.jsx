import React from 'react'

const Item = ({Productos}) => {
  return (
    
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