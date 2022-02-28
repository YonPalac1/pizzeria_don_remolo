import axios from "axios";

const ALL_PRODUCTS =  "ALL_PRODUCTS";
const DETAILS =  "DETAILS";
const MODAL = "MODAL";

const dataInicial = {
    products: [],
    product: {},
    modal: false
};

//Reducer
export default function authReducer(state = dataInicial, action) {
  switch (action.type) {
    case MODAL:
      return { ...state, modal: action.payload };

    case DETAILS:
      return { ...state, product: action.payload };

    default:
      return state;
  }
}

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
