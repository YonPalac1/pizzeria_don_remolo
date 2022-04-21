import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { allDataAction, modalAction } from "../../../redux/dataReducer";
import { CardsCategories } from "../../cardsCategories/CardsCategories";
import { Search } from "./Search";
import { TableProducts } from "./TableProducts.jsx";
import "./listProducts.css";
import { Modal } from "../Modal/Modal";

export const ListProducts = () => {
  const dispatch = useDispatch();
  const categoryActive = useSelector((state) => state.data.category_active);
  const modal = useSelector(state => state.data.modal);
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  
  const categories = [
    {
      id: 1,
      name: "pizzas",
    },
    {
      id: 2,
      name: "empanadas",
    },
    {
      id: 3,
      name: "bebidas",
    },
    {
      id: 4,
      name: "postres",
    },
  ];

  useEffect(() => {
    if (categoryActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [categoryActive]);

  const handleAllProducts = () => {
    dispatch(allDataAction());
  };

  const openModal = () => {
    dispatch(modalAction(!modalActive))
  }

  return (
    <div className="list-products-container">
      <div className="filters">
        <div className="filtros-categorias-backoffice">
          {categories.map((category) => {
            return (
              <CardsCategories
                category={category}
                categoryActive={categoryActive}
                key={category.id}
              />
            );
          })}
          <div className="categories-cards" onClick={handleAllProducts}>
            <div className={`categorie-card ${active ? "active" : "unactive"}`}>
              <span>Todos</span>
            </div>
          </div>
        </div>
        <Search icon={<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>} />
        <div className="ordenar-por"></div>
      </div>
      <div className="title-table">
        <h5>Lista de productos</h5>
        <button onClick={openModal} >+ Agregar producto</button>
      </div>
      <TableProducts icons={[<FontAwesomeIcon icon={faTrash} />, <FontAwesomeIcon icon={faPen} />]} />
        { modal && <Modal /> }
    </div>
  );
};
