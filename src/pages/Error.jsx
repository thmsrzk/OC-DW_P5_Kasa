import React from 'react'
import "../styles/Error.scss"

function Error() {
  return (
    <div className='error-container'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/OC-DW_P5_Kasa" className='go-back'>Retourner sur la page d'accueil</a>
    </div> 

  )
}

export default Error;