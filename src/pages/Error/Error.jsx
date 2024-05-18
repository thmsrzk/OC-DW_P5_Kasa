import React from "react";
import "./Error.scss";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/OC-DW_P5_Kasa" className="go-back">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default Error;
