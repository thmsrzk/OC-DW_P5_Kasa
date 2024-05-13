import React from 'react'
import './Rating.scss'
import './Rating_mobile.scss'
import activeStar from '../../assets/icons/active-star.svg'
import inactiveStar from '../../assets/icons/inactive-star.svg'

function Rating() {
  return (
    <div className='rating-container'>
      <img src={activeStar} alt="active star" />
      <img src={activeStar} alt="active star" />
      <img src={activeStar} alt="active star" />
      <img src={activeStar} alt="active star" />
      <img src={inactiveStar} alt="inactive star" />
    </div>
  )
}

export default Rating