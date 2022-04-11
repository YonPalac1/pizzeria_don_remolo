import axios from "axios";

const ADD_PRODUCT =  "ADD_PRODUCT";
const ADD_PRODUCT_FAIL =  "ADD_PRODUCT_FAIL";

const dataInicial = {
    product: [],
};

//Reducer
export default function crudReducer(state = dataInicial, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, product: action.payload };
    case ADD_PRODUCT_FAIL: 
        return { ...state, error: action.payload}

    default:
      return state;
  }
}

export const addNewProductAction = (data) => async (dispatch) => {
  try {
      const json = JSON.stringify(data);
        const res = await axios.post(
          "http://localhost:9000/api/foods/",
          data,
          {
            mode: "no-cors",
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(res)
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data,
        });
      } catch (err) {
          console.log(err.response)
        dispatch({
          type: ADD_PRODUCT_FAIL,
          payload: err.response.data,
        });
      }
};