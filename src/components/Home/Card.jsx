import React from 'react'
import "../../styles/Home/Card.scss"


function Cards({cardsData}) {
  return (
    <>
      {cardsData.map((card) => (
        <figure key={card.id} className="Cards">
          <img src={card.cover} alt={card.title} />
          <figcaption>
            <p>{card.title}</p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Cards