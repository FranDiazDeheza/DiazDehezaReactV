import './App.css';
import Navbar from './components/navBar';
import ItemListConteiner from './components/ItemListConteiner';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailConteiner';
import SinCarrito from './components/sincarrito';
import {CartContextProvider} from './components/context/CartContext'; 

function App() {
  
  
  return (
    <>
    <CartContextProvider>
  <Router>
 
  <Navbar />
  <Routes>
    <Route path="/" element={<ItemListConteiner greeting="Libros"/>} />
    <Route path="/category/:categoryid" element={<ItemListConteiner greeting ="Categoria de Libros"/>} />
    <Route path="/item/:id" element={<ItemDetailConteiner greeting="Detalles"/>} />
    <Route path="/carrito" element={<SinCarrito></SinCarrito>} />

  </Routes>
 
 </Router>  

 </CartContextProvider>
 </>
  );
}


export default App;