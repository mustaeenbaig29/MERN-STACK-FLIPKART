import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { getProductDetailReducer, getProductReducer } from './reducers/ProductReducers'


const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductsDetails: getProductDetailReducer
})

const middlewear = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewear))
)

export default store