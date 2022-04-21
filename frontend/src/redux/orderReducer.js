import axios from "axios";

const ALL_ORDERS = "ALL_ORDERS";

const dataInicial = {
  orders: [],
};

//Reducer
export default function orderReducer(state = dataInicial, action) {
  switch (action.type) {
    case ALL_ORDERS:
      return { ...state, orders: action.payload };

    default:
      return state;
  }
}

export const allOrdersAction = () => async (dispatch) => {
  try {
    const res = await axios.get(" http://localhost:9000/api/order/");
    dispatch({
        type: ALL_ORDERS,
        payload: res.data.result
    })
  } catch (err) {
    console.log(err);
  }
};
