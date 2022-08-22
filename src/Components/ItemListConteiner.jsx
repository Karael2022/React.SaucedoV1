//snipper rface
import React from 'react'

const ItemListConteiner = (props) => {
    //console.log(props)
    //const{saludo,greeting} = props si lo hago asi debo quitar los props de <p>
  return (
    <div>
        <p>{props.saludo}</p>
        <p>{props.greeting}</p>
    </div>
  )//se centra la logica en un solo lugar
}

export default ItemListConteiner

//si quiero sacar propiedades de 1obj{} si es de un array []