import Navbar from "./components.js/navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from "./routes/home";
import Aboutpage from "./routes/about";
import Shop from "./routes/shop";
import ItemDetail from "./routes/itemdetail";
import { useState } from "react";
import ShoppingCart from "./routes/cart";

function App() {
  const [cart, setcart] = useState([]);

  const changeCart = (newcart) =>{
    setcart(newcart);
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar cart={cart}/>
      <Routes>
          <Route path="/shopping-cart-project/" element={<Homepage/>}/>
          <Route path="/shopping-cart-project/homepage" element={<Homepage/>}/>
          <Route path="/shopping-cart-project/aboutpage" element={<Aboutpage/>}/>
          <Route path="/shopping-cart-project/shoppage" element={<Shop/>}/>
          <Route path="/shopping-cart-project/shoppage/:id" element={<ItemDetail cart={cart} setcart={changeCart}/>}/>
          <Route path="/shopping-cart-project/cart" element={<ShoppingCart cart={cart} setcart={changeCart}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
