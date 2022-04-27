import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProductAction,
  editProductAction,
} from "../../../redux/crudReducer";
import { productToEditDataAction } from "../../../redux/crudReducer";
import { modalAction } from "../../../redux/dataReducer";
import "./formAddProduct.css";

export const FormAddProduct = () => {
  const dispatch = useDispatch();
  const dataToEdit = useSelector((state) => state.crud.product);
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const initialForm = {
    image: file,
    name: "",
    price: 0,
    description: "",
    measurement: 0,
    category: "",
  };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {    
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setImages([...e.target.files]);
  };

  useEffect(() => {
    if(dataToEdit){
      if(dataToEdit.length === 0){
        setForm(initialForm)
      } else {
        setForm(dataToEdit);
      }
    } else {
      setForm(initialForm)
    }
  }, []);

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("measurement", form.measurement);
    
    if(dataToEdit){
      if(dataToEdit.length === 0){
        dispatch(addNewProductAction(formData));
      } else {
        dispatch(editProductAction(formData, dataToEdit._id))
      }
    } else {
      dispatch(addNewProductAction(formData));
    }

    dispatch(modalAction(false))
    dispatch(productToEditDataAction())

  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-image">
          {dataToEdit ?
          dataToEdit.length === 0 ?
          imageUrls.map((imageSrc) => (
            <img src={imageSrc} key={imageSrc} />
          ))
          :
            <img src={dataToEdit.image} />
          :
            imageUrls.map((imageSrc) => (
              <img src={imageSrc} key={imageSrc} />
            ))
          }
          <label htmlFor="file">Agrega una imagen:</label>
          <br />
          <input
            className="products-modal-file"
            name="image"
            type="file"
            onChange={handleChangeImage}
          />
        </div>
        <input
          name="name"
          type="text"
          value={form?.name}
          onChange={handleChange}
          placeholder="Nombre"
        ></input>

        <input
          name="price"
          type="number"
          value={form?.price}
          onChange={handleChange}
          placeholder="Precio"
        ></input>

        <input
          name="description"
          type="text"
          value={form?.description}
          onChange={handleChange}
          placeholder="Descripcion"
        ></input>

        <input
          name="measurement"
          type="number"
          value={form?.measurement}
          onChange={handleChange}
          placeholder="Cantidad"
        ></input>

        <select name="category" value={form?.category} onChange={handleChange}>
          <option value="0">Categoria</option>
          {categories.map((category, i = 0) => {
            return (
              <option value={category.name} key={i++}>
                {category.name}
              </option>
            );
          })}
        </select>


        <button type="submit" className="button-send">
          {" "}
          Enviar
        </button>
      </form>
    </div>
  );
};
