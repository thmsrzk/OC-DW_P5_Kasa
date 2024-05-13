import React from 'react'
import "./Host.scss"

function Host({ name, picture }) {
  return (
    <div className='host-profile'>
        <p>{name}</p>
        <img src={picture} alt={`Photo de l'hôte ${name}`}  />
    </div>
  )
}

export default Host