import React, { useEffect, useState } from "react";
import './slider.css';

function Slider(){
    const [num, setnum] = useState(0);

	const moveSlideLeft = () =>{
        let images = document.querySelectorAll('.images');
        let nummax = Array.from(images).length - 1;
		if(num>0 && num<=nummax){ //num is the pic we are on 0 is the first, on leftclick we lower the number unless we're on the first
			setnum(num-1);
		}
		Array.from(images).forEach(e=>{
			e.style.transform= `translateX(${-100 * num}%)`; //translate moving pictures to the left by number offset
		});
    }
    const moveSlideRight = () =>{
        let images = document.querySelectorAll('.images');
        let nummax = Array.from(images).length - 1;
		if(num>=0 && num<nummax){ //move num up unless we are at the last pic
			setnum(num+1);
		}
		Array.from(images).forEach(e=>{
			e.style.transition='transform 1s ease-in';
			e.style.transform= `translateX(${-100 * num}%)`;
		});
    }


const automaticPlayer =() =>{
    let images = document.querySelectorAll('.images');
    let nummax = Array.from(images).length - 1;
	if(num>=0 && num<nummax){ //move num up unless we are at the last pic
		setnum(num+1);
	}
	else if(num===nummax){ //if we're at the last pic, go back to the first
		setnum(0);
	}
	Array.from(images).forEach(e=>{
		e.style.transform= `translateX(${-100 * num}%)`;
	});
}
    useEffect(()=>{setTimeout(automaticPlayer, 5000)}, [num]);


    return(
        <div className="container">
            <div className="slider">
                <div className="pictureframe">
                    <div className="wide">
                        <div className="images" style={{backgroundImage:`url("https://source.unsplash.com/random/3000x2000/?women+fashion")`}}>Women's wear</div>
                        <div className="images" style={{backgroundImage:`url("https://source.unsplash.com/random/3000x2000/?men+fashion")`}}>Men's Wear</div>
                        <div className="images" style={{backgroundImage:`url("https://source.unsplash.com/random/3000x2000/?kids+fashion")`}}>Kid's Wear</div>
                        <div className="images" style={{backgroundImage:`url("https://source.unsplash.com/random/3000x2000/?jewelry")`}}>Jewelry</div>
                        <div className="images" style={{backgroundImage:`url("https://source.unsplash.com/random/3000x2000/?tech+gadget")`}}>Tech</div>
                    </div>
                </div>
            <div className="controls"><span id="left" className="arrow" onClick={moveSlideLeft}>&#10145;</span> <span id="circles"></span> <span id="right" className="arrow" onClick={moveSlideRight}>&#10145;</span></div>
            </div>
        </div>
    );
}
export default Slider;