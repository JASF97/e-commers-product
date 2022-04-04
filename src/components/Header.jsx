import React, { useState } from "react";
import '../styles/Header.css'

import MenuUser from '../components/MenuUser'
import CardShop from '../containers/CardShop'
import logo from '../images/logo.svg'
import logoMenu from '../images/icon-menu.svg'



const Header = () => {
    
    //const [menu, setMenu] = useState(false)

    return (
        <nav>          
            <div className="nav-left">
                <input type="checkbox" name="" id="check" />
                <label for="check" class="checkbtn">
                    <img className="logoMenu" src={logoMenu} alt=""/>  
                </label>             
                <ul>
                    <li>
                        <a className="name-logo" href="/" >
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">Collections</a>
                    </li>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="nav-right">
                <ul>
                    <li className="nav-cart">
                        <CardShop />
                    </li> 
                    <li className="nav-user">
                        <MenuUser />
                    </li>
                </ul>
            </div>
                             
        </nav>
    )
}

export default Header;