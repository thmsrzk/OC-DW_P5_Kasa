import React from "react";
import housings from "../assets/data/logements.json";
import Error from "./Error";
import { useParams, useNavigate } from "react-router-dom";

function Housing() {
  let { id } = useParams();
  let navigate = useNavigate();

  const housingExists = housings.some((housing) => housing.id === id);

  if (!housingExists) {
    navigate("/OC-DW_P5_Kasa/404");
    return Error();
  }

  return <div>Fiche_Logements</div>;
}

export default Housing;
