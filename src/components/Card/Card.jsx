import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Cards({ card, linkBase }) {
  return (
    <>
      <Link to={`${linkBase}${card.id}`}>
        <figure key={card.id} className="Cards">
          <img src={card.cover} alt={card.title} />
          <figcaption>
            <p>{card.title}</p>
          </figcaption>
        </figure>
      </Link>
    </>
  );
}

export default Cards;
