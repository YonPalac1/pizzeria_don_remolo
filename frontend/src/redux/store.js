import {createStore , combineReducers, compose,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

import authReducer from './authReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    auth : authReducer,
    data : dataReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}