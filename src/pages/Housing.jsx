import React from "react";
import housings from "../assets/data/logements.json";
import Error from "./Error";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "../components/Slider/Slider";

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
    </>
  );
}

export default Housing;
