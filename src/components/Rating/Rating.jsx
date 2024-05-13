import React from 'react'
import './Rating.scss'
import './Rating_mobile.scss'
import activeStar from '../../assets/icons/active-star.svg'
import inactiveStar from '../../assets/icons/inactive-star.svg'

function Rating({ rateValue }) {
  return (
    <div className='rating-container'>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rateValue ? activeStar : inactiveStar}
          alt={`star ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default Rating