import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  allProductsAction,
  deleteProductAction,
  productToEditDataAction,
} from "../../../redux/crudReducer";
import { modalAction } from "../../../redux/dataReducer";

export const TableProducts = ({ icons }) => {
  const dispatch = useDispatch();
  const category_active = useSelector((state) => state.data.category_active);
  const products = useSelector((state) => state.crud.products);
  const key = useSelector((state) => state.crud.keywords);
  const modal = useSelector(state => state.data.modal)

  useEffect(() => {
    if (!key && !category_active) {
      dispatch(allProductsAction());
    }
  }, [modal]);

  useEffect(() => {}, [modal, products])

  const deleteProduct = (id) => {
    if (window.confirm("Desea eliminar este producto?")) {
      dispatch(deleteProductAction(id));
    }
  };

  const editProduct = (data) => {
    dispatch(productToEditDataAction(data));
    dispatch(modalAction(true));
  };


  return (
    <div className="table-list">
      <div className="table-list_header">
        <span>Nombre</span>
        <span>Precio</span>
        <span>Acciones</span>
      </div>
      {products.length
        ? products.map((product) => {
            return (
              <div className="list-products" key={product._id}>
                <div className="products">
                  <span>{product.name}</span>
                </div>
                  <span> ${product.price}</span>
                <div className="list-products-buttons">
                  <button onClick={() => deleteProduct(product._id)}>
                    {icons[0]}
                  </button>
                  <button onClick={() => editProduct(product)}>
                    {icons[1]}
                  </button>
                </div>
              </div>
            );
          })
        : "Cargando ...."}
    </div>
  );
};
