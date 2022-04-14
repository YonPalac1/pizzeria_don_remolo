import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  filterCategoryAction,
  nameCategoryAction,
  loaderAction,
} from "../../redux/dataReducer";
import { filterCategoryBackAction } from "../../redux/crudReducer";

export const CardsCategories = ({ category, categoryActive }) => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleFilterCategories = (name) => {
    try {
      dispatch(loaderAction(true));
      if (location === "/") {
        dispatch(filterCategoryAction(name));
      } else {
        dispatch(filterCategoryBackAction(name));
      }
      dispatch(nameCategoryAction(name));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="categories-cards"
        onClick={() => handleFilterCategories(category.name)}
      >
        <div
          className={`categorie-card ${
            categoryActive === category.name ? "active" : "unactive"
          }`}
        >
          <span>{category.name}</span>
        </div>
      </div>
    </>
  );
};
