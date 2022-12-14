import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailConteiner from './Components/ItemDetailConteiner';
import ItemListConteiner from './Components/ItemListConteiner';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { CartProvider } from './Contex/CartContex';
import Comprar from './Components/Comprar';





function App() {
  const saludo = 'Feliz Dia!'
    
  //const onAdd = () => {
   //}

  return (
    <CartProvider>
      
      <BrowserRouter>
      
        {/*<NavBarMui/>*/}
        
        <Navbar/> 
        <Routes>
          <Route path='/' element={ <ItemListConteiner/>}/>
          <Route path='/category/:categoryId' element={ <ItemListConteiner saludo={saludo} greeting='hello' />}/>
          <Route path='/detalle/:id' element={<ItemDetailConteiner/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/comprar' element={<Comprar/>}/>          
        </Routes>
        <footer/>
      
        {/*<ItemListConteiner/>
        <ItemDetailConteiner/>
        {/*<ItemCount stock={10} initial={1} onAdd={onAdd}/>*/}
        {/*<Fetch/>
        <h3>Mi proyecto</h3>*/}

      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
