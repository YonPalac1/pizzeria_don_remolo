import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductAction, editProductAction } from "../../../redux/crudReducer";
import "./formAddProduct.css";

export const FormAddProduct = () => {
  const dispatch = useDispatch();
  const dataToEdit = useSelector(state => state.crud.product);
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const initialForm = {
    name: "",
    price: 0,
    description: "",
    measurement: 0,
    category: "",
    show: 0,
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
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])

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
    if(!dataToEdit){
      dispatch(addNewProductAction(form, file));
    } else {
      dispatch(editProductAction(form));
    }
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
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
        ></input>

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Precio"
        ></input>

        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripcion"
        ></input>

        <input
          name="measurement"
          type="number"
          value={form.measurement}
          onChange={handleChange}
          placeholder="Cantidad"
        ></input>

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="0">Categoria</option>
          {categories.map((category, i = 0) => {
            return <option value={category.name} key={i++}>{category.name}</option>;
          })}
        </select>

        <select name="show" value={form.show} onChange={handleChange}>
          <option value="0">Mostrar</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>

        <button type="submit" className="button-send">
          {" "}
          Enviar
        </button>
      </form>
    </div>
  );
};
