import React, { useState } from 'react'
import '../styles/titleDescription.scss'
import arrowIcon from '../assets/icons/arrow.svg'

function TitleDescription({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
        <div className='collapse-title'>
            <h2>{title}</h2>
            <img onClick={() => setIsOpen(!isOpen)} className="arrow-icon" src={arrowIcon}></img>
        </div>
        <div className="collapse-content" style={{maxHeight: isOpen ? '1000px' : '0'}}>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default TitleDescription