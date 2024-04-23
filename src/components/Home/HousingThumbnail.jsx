import React from 'react'
import "../../styles/Home/HousingThumbnail.scss"


function Housings({housingsData}) {
  return (
    <>
      {housingsData.map((housing) => (
        <figure key={housing.id} className="Housings">
          <img src={housing.cover} alt={housing.title} />
          <figcaption>
            <p>{housing.title}</p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Housings