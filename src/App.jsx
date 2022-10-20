import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Catalogo from './Components/Catalogo';
import CartContextProvider from './Components/CartContext';
import Detalles from './Components/Detalles';

import Header from './Components/Header';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Catalogo></Catalogo>} />
          <Route path = "/item/:id" element = {<Detalles></Detalles>} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
