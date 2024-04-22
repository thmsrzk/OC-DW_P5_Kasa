import React from 'react';
import logo from '../assets/images/Kasa_Logo.png';
import "../styles/Header.scss";

function Header() {
  return (
    <>
    <header>
        <nav>
            <img src={logo} alt="logo"/>
            <ul>
                <li><a href="">Accueil</a></li>
                <li><a href="">A propos</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header