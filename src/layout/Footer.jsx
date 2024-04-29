import React from 'react'
import './Footer.scss'
import logo from '../assets/images/Kasa_Footer_Logo.png'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo" id='banner_logo'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer