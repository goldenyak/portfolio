import React from 'react';
import "./ArrowButton.css";
import {IoArrowDown} from "react-icons/io5";

const ArrowButton = () => {
    return (
        <button className="arrowButton">
            <IoArrowDown className="icon"/>
        </button>
    );
};

export default ArrowButton;