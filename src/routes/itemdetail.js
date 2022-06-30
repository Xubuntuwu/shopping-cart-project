import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './itemdetail.css';

function ItemDetail(props){
    const [product, setProduct] = useState({});
    const id = useParams();
    const saveddata = require('../assets/products.json');


    useEffect(()=>{
        productFetch();
    }, []);

    const correctproduct = (product) =>{
        return product.id === Number(id.id);
    }
    const productFetch = () =>{
        // const data = await fetch(`https://fakestoreapi.com/products/${id.id}`);
        // const product = await data.json();
        // console.log(product);
        const productindex = saveddata.findIndex(correctproduct);
        const product = saveddata[productindex];
        setProduct(product);
    }
    const addToCart = () =>{
        if(props.cart.length<1){
            props.setcart([...props.cart,{'product': product, quantity: 1}]);
        }
        else if(props.cart.findIndex(element => element.product.id===product.id)===-1){
            props.setcart([...props.cart,{'product': product, quantity: 1}]);
        }
        else{
            const id = props.cart.findIndex(element => element.product.id===product.id);
            const newcart = props.cart;
            const oldquantity = newcart[id].quantity;
            newcart.splice(id, 1, {'product': product, quantity: oldquantity+1});
            props.setcart(newcart);
        }
    }

    return(
        
    <div id="productdetail">
        <main>
            {product && product.rating ? <div id="container">
                <img src={product.image} alt="product"/>
                <div id="info">
                    <div id="productname">{product.title}</div>
                    <div id="productdescription">{product.description}</div>
                    <div id="productprice">${product.price}</div>
                    <div id="productrating">Rated {product.rating.rate}, ({product.rating.count})</div>
                    <button id="add" onClick={addToCart}>Add to bag</button>
                </div>
            </div> : ''}
        </main>
    </div>
    );
}
export default ItemDetail;