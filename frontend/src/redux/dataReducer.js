import axios from "axios";

const ALL_PRODUCTS =  "ALL_PRODUCTS";
const FILTER_CATEGORY = "FILTER_CATEGORY";
const LOADER = "LOADER";
const DETAILS =  "DETAILS";
const MODAL = "MODAL";
const INDEX = "INDEX";

const dataInicial = {
    products: [],
    product: {},
    loading: true,
    modal: false,
    index: 0
};

//Reducer
export default function dataReducer(state = dataInicial, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, products: action.payload, loading: false };
    
    case FILTER_CATEGORY:
      return { ...state, products: action.payload, loading: false };
    case LOADER:
      return {...state, loading: action.payload}

    case MODAL:
      return { ...state, modal: action.payload };

    case DETAILS:
      return { ...state, product: action.payload };
    
    case INDEX:
      return { ...state, index: action.payload };

    
    default:
      return state;
  }
}

export const allDataAction = () => async (dispatch) => {
  const foods = await axios.get('http://localhost:3001/api/foods')
  const drinks = await axios.get('http://localhost:3001/api/drinks')
  dispatch({
    type: ALL_PRODUCTS,
    payload: [...drinks.data.data, ...foods.data.data]
  });
};

export const filterCategoryAction = (name) => async (dispatch) => {
  const foods = await axios.get(`http://localhost:3001/api/foods?show=1&category=${name}`)
  dispatch({
    type: FILTER_CATEGORY,
    payload: foods.data.data
  });
};

export const loaderAction = (load) => async (dispatch) => {
  dispatch({
    type: LOADER,
    payload: load
  });
};

export const modalAction = (modal) => (dispatch) => {
  dispatch({
    type: MODAL,
    payload: modal
  });
};
export const productAction = (details) => (dispatch) => {
  dispatch({
    type: DETAILS,
    payload: details
  });
};
export const indexAction = (i) => (dispatch) => {
  dispatch({
    type: INDEX,
    payload: i
  });
};
