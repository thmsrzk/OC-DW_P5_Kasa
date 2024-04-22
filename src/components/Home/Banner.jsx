import React from 'react'
import BannerImg from '../../assets/images/Kasa_Home_Banner.png';


function Banner() {
  return (
    <div className="banner">
      <img src={BannerImg} alt="" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner