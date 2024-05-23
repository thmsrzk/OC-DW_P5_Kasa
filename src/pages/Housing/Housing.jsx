import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import housings from "../../assets/data/logements.json";
import Error from "../Error/Error.jsx";
import Host from "../../components/Host/Host.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import "./Housing.scss";

function Housing() {
let { id } = useParams(); // Get the id from the URL parameters
let navigate = useNavigate();

// Try to find an object with a matching id
const housing = housings.find((housing) => housing.id === id);

useEffect(() => {
  // No matching id? ---> navigate to 404 page
  if (!housing) {
    navigate("/OC-DW_P5_Kasa/404");
  }
}, [housing, navigate]); // Runs only when the 'housing' object or 'navigate' function changes

// No matching id? ---> render the 'Error' component
if (!housing) {
  return <Error />;
}

  return (
    <>
      <Slider pictures={housing.pictures} />
      <div className="infos-container">
        <div className="housing-infos">
          <div className="title-and-location">
            <h1>{housing.title}</h1>
            <p>{housing.location}</p>
          </div>
          <div className="tags">
            {housing.tags.map((tag, index) => (
              <div key={index} className={`tag tag-${index}`}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="host-infos">
          <Host name={housing.host.name} picture={housing.host.picture} />
          <Rating rateValue={housing.rating} />
        </div>
      </div>
      <div className="collapses-container">
        <Collapse title="Description" children={housing.description} />
        <Collapse title="Équipements">
          <ul>
            {housing.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}

export default Housing;
