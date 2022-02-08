import axios from 'axios'

const REGISTER ='REGISTER'
const LOGIN ='LOGIN'

const dataInicial = {
    data: [],
    user: [],
    login: false,
    errors: [],
    isError: false
}


//Reducer
export default function reducer (state = dataInicial, action){
    switch (action.type) {

        case REGISTER:
            return {...state, data: [...state.data, action.payload]};
        
        case LOGIN:
            const userLogged = action.payload.meta.ok
            const error = action.payload.error
            const errorsMsg = action.payload.errors
            
            return {...state, login: userLogged, isError: error, data: action.payload, errors: errorsMsg};

        default:
            return state
    }
}

export const registerAction = (data) => async (dispatch) => {
    try {
        const json = JSON.stringify( data );
        await axios.post('http://localhost:3001/api/admin/register', json, {
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        })
        .then(res => {
            dispatch({
                type: REGISTER, 
                payload: res.data.data
            })
            console.log(res)
            alert("REgistrado con exito")
        })
    } catch (err) {
        console.log(err)
    }
}

export const loginAction = (data) => async (dispatch) => {
    try {
        const json = JSON.stringify( data );
        await axios.post('http://localhost:3001/api/admin/login', json, {
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        })
        .then(res => {
            dispatch({
                type: LOGIN,
                payload: res.data
            })
            console.log(res.data)
        })
    } catch(err){
        console.log(err)
    }
}
