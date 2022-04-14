import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allProductsAction, deleteProductAction, productToEditDataAction } from "../../../redux/crudReducer";

export const TableProducts = ({ icons }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.crud.products);
  const key = useSelector((state) => state.crud.keywords);

  useEffect(() => {
    if(!key){
      dispatch(allProductsAction());
    }
  }, [products]);

  const deleteProduct = (id) => {
    if(window.confirm("Desea eliminar este producto?")){
      dispatch(deleteProductAction(id));
    }
  };

  const editProduct = (data) => {
    dispatch(productToEditDataAction(data))
    navigate('/backoffice/admin')
  };

  return (
    <div>
      {products.length
        ? products.map((product) => {
            return (
              <div className="list-products" key={product._id}>
                <div className="products">
                  <span>{product.name}</span>
                  <span> ${product.price}</span>
                </div>
                <div className="list-products-buttons">
                  <button onClick={() => deleteProduct(product._id)}>{icons[0]}</button>
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
