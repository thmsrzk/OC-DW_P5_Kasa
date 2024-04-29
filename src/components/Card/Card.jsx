import React from 'react'
import "./Card.scss"


function Cards({card}) {
  return (
    <>
        <figure key={card.id} className="Cards">
          <img src={card.cover} alt={card.title} />
          <figcaption>
            <p>{card.title}</p>
          </figcaption>
        </figure>
    </>
  );
};

export default Cards