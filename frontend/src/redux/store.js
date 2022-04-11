import {createStore , combineReducers, compose,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'

import authReducer from './authReducer';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';
import crudReducer from './crudReducer';

const rootReducer = combineReducers({
    auth : authReducer,
    data : dataReducer,
    cart : cartReducer,
    crud: crudReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}