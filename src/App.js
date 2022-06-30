// import './App.css';
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
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="homepage" element={<Homepage/>}/>
          <Route path="aboutpage" element={<Aboutpage/>}/>
          <Route path="shoppage" element={<Shop/>}/>
          <Route path="shoppage/:id" element={<ItemDetail cart={cart} setcart={setcart}/>}/>
          <Route path="cart" element={<ShoppingCart cart={cart} setcart={setcart}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
