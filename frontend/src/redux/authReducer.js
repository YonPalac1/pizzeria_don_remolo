import axios from "axios";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SESSION = "SESSION";

const dataInicial = {
  ok: false,
  user: [],
  errors: [],
};

//Reducer
export default function authReducer(state = dataInicial, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload.data,
        errors: action.payload.errors,
        ok: action.payload.meta.ok,
      };

    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      return { ...state,
        user: action.payload.data,
        errors: action.payload.errors,
        ok: action.payload.meta.ok,
       };
    case SESSION: 
      return { ...state,
        user: action.payload,
        errors: null,
        ok: true,
      }
    case LOGOUT:
      localStorage.removeItem('user')
      return { ...state,
        user: null,
        errors: null,
        ok: false,
       };


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
<<<<<<< HEAD:frontend/src/redux/reducer.js
=======

export const sessionAction = (data) => (dispatch) =>{
  const user = JSON.parse(data)
  dispatch({
    type: SESSION,
    payload: user
  })
}

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: false
  });
};
>>>>>>> 0a34be0c6f5365e6182ee6a31cb8579c43559790:frontend/src/redux/authReducer.js
