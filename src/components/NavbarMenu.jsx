import React from 'react'


import logo from '../images/logo.svg'

const NavbarMenu = () => {
  return (
    <div>
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
  )
}

export default NavbarMenu