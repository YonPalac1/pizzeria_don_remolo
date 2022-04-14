import axios from "axios";

const REGISTER = "REGISTER";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN = "LOGIN";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";
const SESSION = "SESSION";
const MODAL = "MODAL";

const dataInicial = {
    ok: false,
    user: [],
    errors: [],
    modal: false,
    rol: 0,
};

//Reducer
export default function authReducer(state = dataInicial, action) {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                user: action.payload.data,
                rol: action.payload.data.rol,
                errors: action.payload.data.errors,
                ok: action.payload.ok,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                errors: action.payload.errors,
                ok: action.payload.ok,
            };

    case LOGIN:
      return {
        ...state,
        user: action.payload.data,
        rol: action.payload.data.rol,
        errors: action.payload.errors,
        ok: action.payload.ok,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: action.payload.errors,
        ok: action.payload.ok,
      };
    case SESSION:
      return { ...state, 
        user: action.payload, 
        rol: action.payload.rol,
        errors: null, 
        ok: true 
      };

        case LOGOUT:
            localStorage.removeItem("user");
            return { ...state, user: null, errors: null, ok: false };
        case MODAL:
            return { ...state, modal: action.payload };

        default:
            return state;
    }
}

export const registerAction = (data) => async (dispatch) => {
    try {
        const json = JSON.stringify(data);
        const res = await axios.post(
            "http://localhost:9000/api/users/register",
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
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data,
        });
    }
};

export const loginAction = (data, check) => async (dispatch) => {
  try {
    const json = JSON.stringify(data);
    const res = await axios.post(
      "http://localhost:9000/api/users/login",
      json,
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (check) {
      localStorage.setItem("user", JSON.stringify(res.data.data))
    }
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

export const sessionAction = (data) => (dispatch) => {
    const user = JSON.parse(data);
    dispatch({
        type: SESSION,
        payload: user,
    });
};

export const logoutAction = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
        payload: false,
    });
};
export const modalAction = (modal) => (dispatch) => {
    dispatch({
        type: MODAL,
        payload: modal,
    });
};
