import React from 'react'
import './Footer.scss'
import './Footer_mobile.scss'
import logo from '../assets/images/Kasa_Footer_Logo.png'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo" id='banner_logo'/>
        <p>© {(new Date().getFullYear())} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer