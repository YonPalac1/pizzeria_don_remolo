import axios from "axios";

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_PRODUCT_FAIL = "ADD_PRODUCT_FAIL";
const DATA_EDIT_PRODUCT = "DATA_EDIT_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const SEARCH_RESULT = "SEARCH_RESULT";
const FILTER_CATEGORY = "FILTER_CATEGORY";

const dataInicial = {
  products: [],
  product: [],
  dataToEdit: [],
  productsFilter: [],
  searchResult: [],
  keywords: "",
};

//Reducer
export default function crudReducer(state = dataInicial, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case ADD_PRODUCT_FAIL:
      return { ...state, error: action.payload };
    
    case DELETE_PRODUCT: {
      let newData = state.columns.filter((data) => data.id !== action.payload);

      return { ...state, products: newData}
    }
    case EDIT_PRODUCT:
      let newData = state.products.filter(data => data._id === action.payload._id)

      return { ...state, products: newData }

    case DATA_EDIT_PRODUCT: 
      
      return { ...state, product: action.payload }

    case SEARCH_RESULT:
      const arrayProducts = state.products;
      const filterProducts = arrayProducts.filter((product) => {
        return product.name.toLowerCase().includes(action.payload);
      });

      return { ...state, products: filterProducts, keywords: action.payload };
  
    case FILTER_CATEGORY:
      return { ...state, products: action.payload, loading: false };

    default:
      return state;
  }
}

export const allProductsAction = () => async (dispatch) => {
  const foods = await axios.get("http://localhost:9000/api/foods");
  const drinks = await axios.get("http://localhost:9000/api/drinks");
  dispatch({
    type: ALL_PRODUCTS,
    payload: [...drinks.data.data, ...foods.data.data],
  });
};

export const addNewProductAction = (data) => async (dispatch) => {
  try {
    const json = JSON.stringify(data);
    const res = await axios.post("http://localhost:9000/api/foods/", data, {
      mode: "no-cors",
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    });
    
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: err.response.data,
    });
  }
};

export const productToEditDataAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DATA_EDIT_PRODUCT,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const editProductAction = (data) => async (dispatch) => {
  try { 
    const json = JSON.stringify(data);
    const res = await axios.patch(`http://localhost:9000/api/foods/${data._id}`, json, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    console.log(res.data.data)
    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data.data
    })
  } catch (err) {
    console.log(err.response)
  }
}

export const deleteProductAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:9000/api/foods/${id}`);
   
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const searchResultados = (keywords) => async (dispatch, getState) => {
  try {
    const key = keywords.toLowerCase();
    dispatch({
      type: SEARCH_RESULT,
      payload: key,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterCategoryBackAction = (name) => async (dispatch) => {
  const foods = await axios.get(
    `http://localhost:9000/api/foods?show=1&category=${name}`
  );
  dispatch({
    type: FILTER_CATEGORY,
    payload: foods.data.data,
  });
};
