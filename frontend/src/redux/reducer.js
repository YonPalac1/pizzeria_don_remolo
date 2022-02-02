import axios from "axios"

const READ_ALL_DATA ='READ_ALL_DATA'

const dataInicial = {
    data: []
}


//Reducer
export default function reducer (state = dataInicial, action){
    switch (action.type) {
        case READ_ALL_DATA:
            return {...state, data: action.payload};
        
            default:
            return state
    }
}