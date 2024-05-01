import React, { useState, useRef, useEffect } from 'react'
import './Collapse.scss'
import arrowIcon from '../../assets/icons/arrow.svg'

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);

    return (
        <div className='collapse-container'>
            <div className='collapse-title'>
                <h2>{title}</h2>
                <img onClick={() => setIsOpen(!isOpen)} className={`arrow-icon ${isOpen ? 'rotate' : ''}`} src={arrowIcon}></img>
            </div>
            <div ref={contentRef} className="collapse-content">
                <div className="collapse-text">{children}</div>
            </div>
        </div>
    )
}

export default Collapse