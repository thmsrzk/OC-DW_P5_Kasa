import React, { useState } from "react";
import "./Slider.scss";
import leftChevron from "../../assets/icons/left-arrow.svg";
import rightChevron from "../../assets/icons/right-arrow.svg";

function Slider({ pictures }) {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(indexPayload) {
    let newState;
    if (indexPayload + sliderIndex > pictures.length) {
      newState = 1;
    } else if (indexPayload + sliderIndex < 1) {
      newState = pictures.length;
    } else {
      newState = sliderIndex + indexPayload;
    }
    setSliderIndex(newState);
  }

  return (
    <div className="slider">
        <img src={pictures[sliderIndex - 1]} alt={`Slide ${sliderIndex}`} className="slider-img"/>
        <button onClick={() => toggleImage(-1)} className="navigation-button prev-button">
            <img src={leftChevron} alt="previous image" />
        </button>
        <button onClick={() => toggleImage(+1)} className="navigation-button next-button">
            <img src={rightChevron} alt="next image" />
        </button>
        <p className="index-info">{sliderIndex} / {pictures.length}</p>
    </div>
  );
}

export default Slider;
