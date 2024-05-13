import React from 'react'
import './Rating.scss'
import './Rating_mobile.scss'
import activeStar from '../../assets/icons/active-star.svg'
import inactiveStar from '../../assets/icons/inactive-star.svg'

function Rating({ rateValue }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rateValue) {
      stars.push(<img key={i} src={activeStar} alt="active star" />);
    } else {
      stars.push(<img key={i} src={inactiveStar} alt="inactive star" />);
    }
  }

  return (
    <div className='rating-container'>
      {stars}
    </div>
  )
}

export default Rating