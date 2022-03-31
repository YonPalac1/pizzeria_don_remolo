import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const AdminMenu = () => {
  return (
    <Link className="buttonsSigin" to="/">
      <FontAwesomeIcon icon={faUser} /> Administrador
    </Link>
  );
};
