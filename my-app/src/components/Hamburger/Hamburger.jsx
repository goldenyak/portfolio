import React from 'react';
import "./Hamburger.css"

export const Hamburger = ({toggleShowMenu, showMenu}) => {
    return (
        <a onClick={toggleShowMenu} href="#" className={showMenu === true ? "menuLight" : "menu"}>
            <span>{showMenu === true ? "close" : "menu"}</span>
            <b>
                <i></i>
                <i></i>
                <i></i>
            </b>
        </a>
    );
};
