import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import shoppingcart from '../assets/shoppingcart.svg';

function Navbar(props){

    return(
    <nav>
        <h3><Link to="/" style={{textDecoration: 'inherit', color: 'inherit'}}><span>Logo</span></Link></h3>
        <ul>
            <Link to="/homepage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>Home</li></Link>
            <Link to="/aboutpage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>About</li></Link>
            <Link to="/shoppage" style={{textDecoration: 'inherit', color: 'inherit'}}><li>Shop</li></Link>
            <li><img src={shoppingcart} alt="shopcart"/></li>
        </ul>
    </nav>
    );
}
export default Navbar;