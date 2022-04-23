import axios from "axios";

const ALL_ORDERS = "ALL_ORDERS";
const ORDERS_ACCEPTED = "ORDERS_ACCEPTED";
const DELETE_ORDERS = "DELETE_ORDERS";
const MODAL = "MODAL";

const dataInicial = {
  orders: [],
  ordersConfirm: [],
  details: []
};

//Reducer
export default function orderReducer(state = dataInicial, action) {
  switch (action.type) {
    case ALL_ORDERS:
      return { ...state, orders: action.payload };

    case ORDERS_ACCEPTED:{
      let newData = state.orders.filter(data => data._id === action.payload)

      return { ...state, ordersConfirm: [...state.orders, newData]}
    }
    
    case DELETE_ORDERS:
      let newData = state.orders.filter((data) => data.id !== action.payload);

      return { ...state, orders: newData };
    case MODAL:
      return { ...state, details: action.payload}
    default:
      return state;
  }
}

export const allOrdersAction = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:9000/api/order/");

    dispatch({
        type: ALL_ORDERS,
        payload: res.data.result
    })
  } catch (err) {
    console.log(err);
  }
};
export const confirmOrderAction = (id) => async (dispatch) => {
  try { 
    await axios.patch(`http://localhost:9000/api/order/cancel/${id}`);

    dispatch({
      type: ORDERS_ACCEPTED,
      payload: id
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteOrderAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:9000/api/order/remove/${id}`);
    dispatch({
      type: DELETE_ORDERS,
      payload: id
  })
  } catch (err) {
    console.log(err);
  }
}


export const detailsModal = (data) => (dispatch) =>  {
  dispatch({
    type: MODAL,
    payload: data
  })
}