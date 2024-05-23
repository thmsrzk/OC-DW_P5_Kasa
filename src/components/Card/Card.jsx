import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.scss";

//Display a card with an image and title, and linking to a detail page
function Cards({ card, linkBase }) {
  return (
    <Link to={`${linkBase}${card.id}`}>
      <figure className="Cards">
        <img src={card.cover} alt={card.title} />
        <figcaption>
          <p>{card.title}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

Cards.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  linkBase: PropTypes.string.isRequired,
};

export default Cards;
