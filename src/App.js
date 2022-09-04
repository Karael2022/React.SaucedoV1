import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Fetch from './Components/Clases/Fetch';
import ItemDetailConteiner from './Components/ItemDetailConteiner';
import ItemListConteiner from './Components/ItemListConteiner';
import Navbar from './Components/Navbar';
import NavBarMui from './Components/NavBarMui';



function App() {
  const saludo = 'Feliz Dia!'
  //toda la logica va antes del return. Luego de declarar el componente
  
  const onAdd = () => {
 
  }
  return (
    <>
    <BrowserRouter>
    
      {/*<NavBarMui/>*/}
      <Navbar/> 
      <Routes>
        <Route path='/' element={ <ItemListConteiner/>}/>
        <Route path='/category/:categoryId' element={ <ItemListConteiner saludo={saludo} greeting='hello' />}/>
        <Route path='/detalle/:id' element={<ItemDetailConteiner/>}/>
      </Routes>
      {/*<ItemListConteiner/>
      <ItemDetailConteiner/>
      {/*<ItemCount stock={10} initial={1} onAdd={onAdd}/>*/}
      <Fetch/>
    
      <h3>Mi proyecto</h3>

    </BrowserRouter>
    </>
  );
}

export default App;
