import axios from "axios";

const CART = "CART";
const TOTAL = "TOTAL";
const DELETE = "DELETE";
const INFO = "INFO";
const SHIPPING = "SHIPPING";
const ORDER = "ORDER";
const ORDER_STATUS = "ORDER_STATUS";

const dataInicial = {
    cart: [],
    total: 0,
    info: [],
    shipping: "delivery",
    order: {},
    orderStatus: {}
};

//Reducer
export default function cartReducer(state = dataInicial, action) {
    switch (action.type) {
        case CART:
            return { ...state, cart: [...state.cart, action.payload], order: {...state.order, menu: action.payload} };

        case TOTAL:
            return { ...state, total: action.payload };

        case DELETE:
            const newData = state.cart.filter(data => data._id !== action.payload)
            const newTotal = newData.price - state.total;
            return { ...state, cart: newData, total: newTotal };

        case INFO:
            return { ...state, info: action.payload, 
                order: {...state.order, 
                    name: action.payload.name,
                    lastname: action.payload.lastname,
                    celphone: action.payload.celphone,
                    address: action.payload.address,
                    note: action.payload.note,
                    menu: state.cart,
                    total: state.total,  }};
            
            case SHIPPING:
            return { ...state, shipping: action.payload, order: {...state.order, retire: action.payload}};

        case ORDER:
            return { ...state, order: action.payload };

        case ORDER_STATUS:
            return { ...state, orderStatus: action.payload };
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
    const total = array.reduce((acum, num) => acum + num)
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

export const saveOrder = (order) => (dispatch) => {
    dispatch({
        type: ORDER,
        payload: order
    });
};

export const makeOrder = (order) => async (dispatch) => {
    const json = JSON.stringify(order);
    const res = await axios.post(
        "http://localhost:9000/api/order", json,
        {
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }
    )

    dispatch({
        type: ORDER_STATUS,
        payload: res.data
    });
};



