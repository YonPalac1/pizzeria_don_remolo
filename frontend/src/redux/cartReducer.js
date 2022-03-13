import axios from "axios";

const CART = "CART";
const TOTAL = "TOTAL";
const DELETE = "DELETE";
const INFO = "INFO";
const SHIPPING = "SHIPPING";
const CHECKOUT = "CHECKOUT";

const dataInicial = {
    cart: [],
    total: 0,
    info: [],
    shipping: "",
    checkout: []
};

//Reducer
export default function cartReducer(state = dataInicial, action) {
  switch (action.type) {
    case CART:
      return { ...state, cart: [...state.cart, action.payload]};

    case TOTAL:
      return { ...state, total: action.payload };
    
    case DELETE:
      const newData = state.cart.filter(data => data._id !== action.payload)
      const newTotal = newData.price - state.total;
      return { ...state, cart: newData, total: newTotal};
    
    case INFO:
      return { ...state, info: action.payload};
    
    case SHIPPING:
      return { ...state, shipping: action.payload};
    
    case CHECKOUT:
      return { ...state, checkout: action.payload};
        
    default:
      return state;
  }
}


export const cartAction = (cart) => (dispatch) => {
  dispatch({
    type: CART,
    payload: cart
  });
};

export const totalAction = (array) => (dispatch) => {
  const total = array.reduce((acum, num)=> acum + num)
  dispatch({
    type: TOTAL,
    payload: total
  });
};

export const deleteAction = (id) => (dispatch) => {
  dispatch({
    type: DELETE,
    payload: id
  });
};

export const infoAction = (info) => (dispatch) => {
  dispatch({
    type: INFO,
    payload: info
  });
};

export const shippingAction = (shipping) => (dispatch) => {
  dispatch({
    type: SHIPPING,
    payload: shipping
  });
};

export const checkoutAction = (checkout) => (dispatch) => {
  dispatch({
    type: SHIPPING,
    payload: checkout
  });
};