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
          <Route path={process.env.PUBLIC_URL + '/'} element={<Homepage/>}/>
          <Route path={process.env.PUBLIC_URL + "/homepage"} element={<Homepage/>}/>
          <Route path={process.env.PUBLIC_URL + "/aboutpage"} element={<Aboutpage/>}/>
          <Route path={process.env.PUBLIC_URL + "/shoppage"} element={<Shop/>}/>
          <Route path={process.env.PUBLIC_URL + "/shoppage/:id"} element={<ItemDetail cart={cart} setcart={changeCart}/>}/>
          <Route path={process.env.PUBLIC_URL + "/cart"} element={<ShoppingCart cart={cart} setcart={changeCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
