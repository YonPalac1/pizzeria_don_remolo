import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import { addNewProductAction } from "../../../redux/crudReducer";
import "./formAddProduct.css";

export const FormAddProduct = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [form, handleChange] = useForm({
    name: "",
    price: 0,
    description: "",
    measurement: 0,
    category: "",
    show: 0,
  }); 
  const { name, price, description, measurement, category, show } = form;

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
    console.log(images)
  }, [images]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setImages([...e.target.files]);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProductAction(form, file));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-image">
          {imageUrls.map((imageSrc) => (
            <img src={imageSrc} key={imageSrc} />
          ))}
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
          value={name}
          onChange={handleChange}
          placeholder="Nombre"
        ></input>

        <input
          name="price"
          type="number"
          value={price}
          onChange={handleChange}
          placeholder="Precio"
        ></input>

        <input
          name="description"
          type="text"
          value={description}
          onChange={handleChange}
          placeholder="Descripcion"
        ></input>

        <input
          name="measurement"
          type="number"
          value={measurement}
          onChange={handleChange}
          placeholder="Cantidad"
        ></input>

        <select name="category" value={category} onChange={handleChange}>
          <option value="0">Categoria</option>
          {categories.map((category) => {
            return <option value={category.name} key={category.id}>{category.name}</option>;
          })}
        </select>

        <select name="show" value={show} onChange={handleChange}>
          <option value="0">Mostrar</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>

        <button type="submit" className="button">
          {" "}
          Enviar
        </button>
      </form>
    </div>
  );
};
