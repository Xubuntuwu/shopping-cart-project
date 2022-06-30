import React, { useEffect, useState } from "react";
import './cart.css';

function ShoppingCart(props){
    const [subtotal, setsubtotal] = useState(0);
    const [delivery, setdelivery] = useState(0);

    
    useEffect(()=>{
        let amount = props.cart.reduce(
            (prev, cur) =>prev+cur.product.price*cur.quantity, 0
        )
        setsubtotal(Math.round((amount + Number.EPSILON) * 100) / 100
        );

        if(amount>50 || amount===0){
            setdelivery(0);
        }
        else{
            setdelivery(5);
        }
        props.setcart(props.cart);
    }, [ props.cart]);

    const editCartUp = (id) =>{
        //HOLY FUCK BY NOT SLICING IT I WAS MUTATING THE ORIGINAL ARRAY THE ENTIRE TIME THATS WHY I T WASNT RE-RENDERING!!!
        let newcart = props.cart.slice();
        const newquantity = newcart[id].quantity + 1;
        const product = newcart[id].product;
        newcart.splice(id, 1, {'product': product, quantity: newquantity});
        props.setcart(newcart);
    }
    const editCartDown = (id) =>{
        let newcart = props.cart.slice();
        const newquantity = newcart[id].quantity - 1;
        if(newquantity<=0){
            newcart.splice(id, 1);
        }
        else{
            const product = newcart[id].product;
            newcart.splice(id, 1, {'product': product, quantity: newquantity});
            props.setcart(newcart);
        }
    }
    const removeItem = (id) =>{
        let newcart = props.cart.slice();
        newcart.splice(id, 1);
        props.setcart(newcart);
    }
    return(
        <div id="shoppingcart">
                <div id="cartcontainer">
                    {
                    props.cart.map(function(product, index){
                        return(
                            <div className="cart-product" key={product.product.id}>
                                <img src={product.product.image} alt="product"/>
                                <div className="info">
                                    <div className="price">${product.product.price}</div>
                                    <div className="name">{product.product.title}</div>
                                    <div className="quantity">
                                        <button className="decrease" onClick={()=> editCartDown(index)}>-</button>
                                        <span className="value">{product.quantity}</span>
                                        <button className="increase" onClick={()=> editCartUp(index)}>+</button>
                                    </div>
                                    <div className="remove" onClick={()=>removeItem(index)}>X</div>
                                </div>
                            </div>
                        );
                    })}
                    <div id="result">
                        <div id="name">Total</div>
                        <div id="subtotal">Sub-total: <span>${subtotal}</span></div>
                        <div id="delivery">* Delivery: ${delivery}</div>
                        <div id="total">Total: <span>${subtotal + delivery}</span></div>
                        <button type="button">Checkout</button>
                        <p>*No delivery fees with purchases over $50!</p>
                    </div>
                </div>
        </div>
    );
}
export default ShoppingCart;