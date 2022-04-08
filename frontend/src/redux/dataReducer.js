import axios from "axios";

const ALL_PRODUCTS =  "ALL_PRODUCTS";
const FILTER_CATEGORY = "FILTER_CATEGORY";
const CATEGORY_ACTIVE = "CATEGORY_ACTIVE";
const LOADER = "LOADER";
const DETAILS =  "DETAILS";
const MODAL = "MODAL";
const INDEX = "INDEX";
const PAGINATION = "PAGINATION";
const PRODUCTS_BY_PAGE = "PRODUCTS_BY_PAGE"

const dataInicial = {
    products: [],
    product: [],
    category_active: "",
    cart: [],
    total: 0,
    loading: true,
    modal: false,
    index: 0,
    page: 1,
    productsByPage: 10
};

//Reducer
export default function dataReducer(state = dataInicial, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { ...state, products: action.payload, loading: false, category_active: null };
    
    case FILTER_CATEGORY:
      return { ...state, products: action.payload, loading: false };

    case CATEGORY_ACTIVE: 
      return {...state, category_active: action.payload}
    
    case DETAILS:
      return { ...state, product: action.payload };
        
    case LOADER:
      return {...state, loading: action.payload}

    case MODAL:
      return { ...state, modal: action.payload };

    case INDEX:
      return { ...state, index: action.payload };
  
    case PAGINATION:
    return { ...state, page: action.payload };

    case PRODUCTS_BY_PAGE:

    return { ...state, productsByPage: action.payload };
  
    
    default:
      return state;
  }
}

export const allDataAction = () => async (dispatch) => {
  const foods = await axios.get('http://localhost:9000/api/foods')
  const drinks = await axios.get('http://localhost:9000/api/drinks')
  dispatch({
    type: ALL_PRODUCTS,
    payload: [...drinks.data.data, ...foods.data.data]
  });
};

export const filterCategoryAction = (name) => async (dispatch) => {
  const foods = await axios.get(`http://localhost:9000/api/foods?show=1&category=${name}`)
  dispatch({
    type: FILTER_CATEGORY,
    payload: foods.data.data
  });
};

export const nameCategoryAction = (name) => async (dispatch) => {
  dispatch({
    type: CATEGORY_ACTIVE,
    payload: name
  })
}

export const productAction = (details) => (dispatch) => {
  dispatch({
    type: DETAILS,
    payload: details
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

export const indexAction = (i) => (dispatch) => {
  dispatch({
    type: INDEX,
    payload: i
  });
};

export const pageAction = (value) => (dispatch) => {
  dispatch({
    type: PAGINATION,
    payload: value
  });

}

export const productsByPageAction = (number) => (dispatch) => {
  dispatch({
    type: PRODUCTS_BY_PAGE,
    payload: number
  });

}