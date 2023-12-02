import { ActionTypes } from "../constants/action-types"

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
//later on we will create remove product
export const removeselectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
       
    }
}