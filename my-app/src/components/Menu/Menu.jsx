import React from 'react';
import "./Menu.css";
import 'animate.css';

const Menu = () => {
    return (
        <div className="content animate__animated animate__fadeInUp animate__delay-0.5s">
            <h5>Menu</h5>
            <ul className= "animate__animated animate__backInLeft">
                <li className="animate__animated animate__slideInLeft animate__delay-0.5s"><a href="#">Projects</a></li>
                <li className="animate__animated animate__slideInLeft animate__delay-0.5s"><a href="#">About me</a></li>
                <li className="animate__animated animate__slideInLeft animate__delay-0.5s"><a href="#">Contact</a></li>
                <li className="animate__animated animate__slideInLeft animate__delay-0.5s"><a href="#">Github</a></li>
                <li className="animate__animated animate__slideInLeft animate__delay-0.5s"><a href="#">Download CV</a></li>
            </ul>
        </div>
    );
};

export default Menu;