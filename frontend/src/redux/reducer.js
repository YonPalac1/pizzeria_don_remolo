import axios from "axios";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";

const dataInicial = {
  ok: false,
  user: [],
  errors: [],
};

//Reducer
export default function reducer(state = dataInicial, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload.data,
        errors: action.payload.errors,
        ok: action.payload.meta.ok,
      };

    case LOGIN:
      return { ...state };

    default:
      return state;
  }
}

export const registerAction = (data) => async (dispatch) => {
  const json = JSON.stringify(data);
  const res = await axios.post(
    "http://localhost:3001/api/admin/register",
    json,
    {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  dispatch({
    type: REGISTER,
    payload: res.data,
  });
};

export const loginAction = (data) => (dispatch) => {
  try {
    const json = JSON.stringify(data);
    axios
      .post("http://localhost:3001/api/admin/login", json, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        });
      });
  } catch (err) {
    console.log(err);
  }
};
