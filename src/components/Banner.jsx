import React from 'react'
import '../styles/Banner.scss';

function Banner({ imgSrc, imgAlt, text }) {
  return (
    <div className="banner">
      <img src={imgSrc} alt={imgAlt} />
      {text && <p>{text}</p>}
    </div>
  )
}

export default Banner