import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import { searchResultados } from "../../../redux/crudReducer";

export const Search = ({ icon }) => {
  const [{ keywords }, handleInputChange, reset] = useForm({
    keywords: "",
  });
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (keywords !== "") {
      dispatch(searchResultados(keywords));
      reset();
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="keywords"
        onChange={handleInputChange}
        value={keywords}
        type="search"
        placeholder="Buscar por nombre"
      ></input>
      <button type="submit">{icon}</button>
    </form>
  );
};
