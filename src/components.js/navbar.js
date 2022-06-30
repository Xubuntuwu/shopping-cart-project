import React, { useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import shoppingcart from '../assets/shoppingcart.svg';

function Navbar(props){
    const [items, setitems] = useState(0);

    const numberInCart = () =>{
        let number = props.cart.reduce((prev, cur)=>{return prev + cur.quantity}, 0);
        setitems(number);
    }

    useEffect(()=>{
        numberInCart()
    }, [props.cart, items]);
    

    return(
    <nav>
        <h3><Link to="/" style={{textDecoration: 'inherit', color: 'inherit'}}><span>Logo</span></Link></h3>
        <ul>
            <Link to="/homepage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>Home</li></Link>
            <Link to="/aboutpage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>About</li></Link>
            <Link to="/shoppage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>Shop</li></Link>
            <Link to="/cart" style={{textDecoration: 'inherit', color: 'inherit'}}><li id="nav-cart"><img src={shoppingcart} alt="shopcart"/>{items}</li></Link>
        </ul>
    </nav>
    );
}
export default Navbar;