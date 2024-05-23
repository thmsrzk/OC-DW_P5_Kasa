import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";
import fullStar from "../../assets/icons/active-star.svg";
import emptyStar from "../../assets/icons/inactive-star.svg";

//Display a rating (on 5) with stars
function Rating({ rateValue }) {
  return (
    <div className="rating-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rateValue ? fullStar : emptyStar}
          alt={`star ${index + 1}`}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rateValue: PropTypes.string.isRequired,
};

export default Rating;
