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
    <div className="App">
      <Navbar cart={cart}/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/aboutpage" element={<Aboutpage/>}/>
          <Route path="/shoppage" element={<Shop/>}/>
          <Route path="/shoppage/:id" element={<ItemDetail cart={cart} setcart={changeCart}/>}/>
          <Route path="/cart" element={<ShoppingCart cart={cart} setcart={changeCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
