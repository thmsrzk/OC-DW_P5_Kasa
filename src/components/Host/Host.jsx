import React from "react";
import PropTypes from "prop-types";
import "./Host.scss";

function Host({ name, picture }) {
  return (
    <div className="host-profile">
      <p>{name}</p>
      <img src={picture} alt={`Photo de l'hôte ${name}`} />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Host;
