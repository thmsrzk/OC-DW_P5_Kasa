import React from 'react'
import Housings from './HousingThumbnail'
import "../../styles/Home/HousingsGallery.scss"
import housingsData from '../../data/logements.json'


function HousingsGallery() {
  return (
    <section className='Housings-Gallery'>
      <Housings housingsData={housingsData}/>

    </section>
  )
}

export default HousingsGallery