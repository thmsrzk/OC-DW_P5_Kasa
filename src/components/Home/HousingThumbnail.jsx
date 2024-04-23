import React from 'react'
import "../../styles/Home/HousingThumbnail.scss"
import locations from "../../data/logements.json";



function Housings() {
  return (
    <figure className='Housings'>
        <img src='' alt='' />
        <figcaption>
            <p>Titre de la location</p>
        </figcaption>
    </figure>
  )
}

export default Housings