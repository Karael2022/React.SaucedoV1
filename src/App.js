import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListConteiner from './Components/ItemListConteiner';
import NavBarMui from './Components/NavBarMui';
import Producto from './Components/Producto';
import ImgMediaCard from './Components/ItemCount';
import ItemCount from './Components/ItemCount';

let producto1 = {id:1, name: "Flores1",price: 100, quantity:10};
let producto2 = {id:2, name: "Flores2",price: 150, quantity:15};
let producto3 = {id:3, name: "Flores3",price: 200, quantity:20};


function App() {
  //toda la logica va antes del return. Luego de declarar el componente
  const saludo = 'hola'
  const onAdd = () => {
    console.log('Compraste')
  }
  return (
    <>
    <NavBarMui/>
    <Navbar/>
    {/*<Producto item={producto1}/>*/}
    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    {/*<Producto item={producto2}/>*/}
    <h3>Mi proyecto</h3>
    <ItemListConteiner saludo={saludo} greeting='Hola como estas?'/> 
    
    </>
  );
}

export default App;
