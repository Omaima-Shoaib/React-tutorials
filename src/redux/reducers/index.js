import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

//we will combine the reducers in this file so we can pass only one reducer to the store 
const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})
export default reducers