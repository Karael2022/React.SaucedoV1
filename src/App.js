import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListConteiner from './Components/ItemListConteiner';


function App() {
  //toda la logica va antes del return. Luego de declarar el componente
  const saludo = 'Feliz dia del niño'
  return (
    <>
    <Navbar/>
    <h1>Hola Mundo desde app.js</h1>
    <ItemListConteiner saludo={saludo} greeting='Hola como estas?'/> 
    
    </>
  );
}

export default App;
