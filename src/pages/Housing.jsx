import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import housings from "../assets/data/logements.json";
import Error from "./Error";
import Host from "../components/Host/Host.jsx";
import Slider from "../components/Slider/Slider";
import Collapse from "../components/Collapse/Collapse";
import "./Housing.scss";
import "./Housing_mobile.scss";

function Housing() {
  let { id } = useParams();
  let navigate = useNavigate();

  const housing = housings.find((housing) => housing.id === id);

  if (!housing) {
    navigate("/OC-DW_P5_Kasa/404");
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
        </div>
      </div>  
      <div className="collapses-container">
        <Collapse title="Description" children={housing.description}/>
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
