import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

//Display a banner with an image and optional text
function Banner({ imgSrc, imgAlt, text }) {
  return (
    <div className="banner">
      <img src={imgSrc} alt={imgAlt} />
      {text && <p>{text}</p>}
    </div>
  );
}

Banner.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
