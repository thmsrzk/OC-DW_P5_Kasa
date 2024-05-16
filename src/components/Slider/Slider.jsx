import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Slider.scss";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

function Slider({ pictures }) {
  const [sliderIndex, setSliderIndex] = useState(1);
  const picturesLength = pictures.length;

  function prevImage() {
    setSliderIndex((prev) => (prev <= 1 ? picturesLength : --prev));
  }

  function nextImage() {
    setSliderIndex((next) => (next >= picturesLength ? 1 : ++next));
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

Slider.propTypes = {
  pictures: PropTypes.array.isRequired
};

export default Slider;