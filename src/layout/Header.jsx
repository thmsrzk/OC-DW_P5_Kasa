import React from 'react';
import logo from '../assets/images/Kasa_Logo.png';
import "./Header.scss";
import { NavLink, useMatch } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav>
            <NavLink to="/OC-DW_P5_Kasa/">  
              <img src={logo} alt="logo"/>
            </NavLink>
            <ul>
                <li>
                  <NavLink to="/OC-DW_P5_Kasa/" className={useMatch("/OC-DW_P5_Kasa/") ? 'active-link' : ''}>
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/OC-DW_P5_Kasa/a-propos" className={useMatch("/OC-DW_P5_Kasa/a-propos") ? 'active-link' : ''}>
                    A propos
                  </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header