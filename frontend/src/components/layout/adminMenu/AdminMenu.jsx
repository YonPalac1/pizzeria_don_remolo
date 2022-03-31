import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { logoutAction } from "../../../redux/authReducer";

export const AdminMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const [dropdown, setDropdown] = useState(false);

  const openDropdown = () => {
    setDropdown(!dropdown)
  }
  
  const logout = () => {
    dispatch(logoutAction())
  }

  return (
    <button className="buttonsSigin user" onClick={openDropdown}>
      <p>
        <FontAwesomeIcon icon={faUser} /> Administrador
      </p>
      <div onClick={logout} className={`dropdown ${dropdown && "active"}`}>
        <span>Logout</span>
      </div>
    </button>
  );
};
