import React from "react";
import './home.css';
import Slider from "../components.js/slider";

function Homepage(props){

    return(
        <div id="homepage">
            <header>New here? Get 15% off almost everything with code: WELCOME</header>
            <main>
            <Slider/>
            </main>
            <footer>Ⓒ Made by Xubuntuwu</footer>
        </div>
    );
}
export default Homepage;