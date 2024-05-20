import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // left arrow key code
          prevImage();
          break;
        case 39: // right arrow key code
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slider">
      <img
        src={pictures[sliderIndex - 1]}
        alt={`Slide ${sliderIndex}`}
        className="slider-img"
      />
      {picturesLength > 1 && (
        <>
          <button onClick={prevImage} className="navigation-button prev-button">
            <img src={leftArrow} alt="previous image" />
          </button>
          <button onClick={nextImage} className="navigation-button next-button">
            <img src={rightArrow} alt="next image" />
          </button>
          <p className="index-info">
            {sliderIndex} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
