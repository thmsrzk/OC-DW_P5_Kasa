import React, { useState } from "react";
import "./Slider.scss";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

function Slider({ pictures }) {
  const [sliderIndex, setSliderIndex] = useState(1);

  function prevImage() {
    let newState;
    if (sliderIndex - 1 < 1) {
      newState = pictures.length;
    } else {
      newState = sliderIndex - 1;
    }
    setSliderIndex(newState);
  }

  function nextImage() {
    let newState;
    if (sliderIndex + 1 > pictures.length) {
      newState = 1;
    } else {
      newState = sliderIndex + 1;
    }
    setSliderIndex(newState);
  }

  return (
    <div className="slider">
        <img src={pictures[sliderIndex - 1]} alt={`Slide ${sliderIndex}`} className="slider-img"/>
        <button onClick={prevImage} className="navigation-button prev-button">
            <img src={leftArrow} alt="previous image" />
        </button>
        <button onClick={nextImage} className="navigation-button next-button">
            <img src={rightArrow} alt="next image" />
        </button>
        <p className="index-info">{sliderIndex} / {pictures.length}</p>
    </div>
  );
}

export default Slider;