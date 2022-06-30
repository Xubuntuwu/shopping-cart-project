import React, { useEffect, useState } from "react";
import './shop.css';
import { Link } from "react-router-dom";

function Shop(props){
    const data = require('../assets/products.json');
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        productFetch();
    }, []);

    const productFetch = () =>{
        // const data = await fetch(
        //     'https://fakestoreapi.com/products'
        //     );
        const products =  data;
        setProducts(products);
    }

    return(
        <div id="shoppage">
            <main>
                {products.map(function(product, index){
                    return(
                        <Link to={`/shopping-cart-project/shoppage/${product.id}`} style={{textDecoration: 'inherit', color: 'inherit'}} key={product.id}>
                        <div key={product.id} className="productcard">
                            <img src={product.image} alt="product"/>
                            <p>
                                <span className="productname">{product.title}</span>
                                {/* {"\n"} */}
                                <span className="price">${product.price}</span>
                            </p>
                        </div>
                        </Link>
                    );
                })}
            </main>
        </div>
    );
}
export default Shop;