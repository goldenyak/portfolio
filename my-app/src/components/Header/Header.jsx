import React from 'react';
import h from "./Header.module.css"
import {Hamburger} from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";

export const Header = ({toggleShowMenu, showMenu}) => {
    return (
        <div className={h.header}>
            <Logo/>
            <Hamburger toggleShowMenu={toggleShowMenu} showMenu={showMenu}/>

         </div>
    );
};
