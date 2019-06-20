import { FETCH_FAILS, FETCH_PRODUCTS, FETCH_SUCCESS, ADD_TO_CART, DELETE_TO_CART, SEND_TO_ORDER, SEND_TO_ORDER_FAIL, SEND_TO_ORDER_SUCCESS, DELETE_ALL_CART } from './actionType';

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS,
    }
}

export const fetchSuccessProducts = (data) => {
    return {
        type: FETCH_SUCCESS,
        data
    }
}

export const fetchFailProducts = (error) => {
    return {
        type: FETCH_FAIL,
        error
    }
}

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}

export const deleteToCart = (data) => {
    return {
        type: DELETE_TO_CART,
        data
    }
}

export const sendToOrder = (data) => {
    return {
        type: SEND_TO_ORDER,
        data
    }
}


export const sendToOrderSuccess = (data) => {
    return {
        type: SEND_TO_ORDER_SUCCESS,
        data
    }
}

export const sendToOrderFail = (error) => {
    return {
        type: SEND_TO_ORDER_FAIL,
        error
    }
}

export const deleteAllCart = () => {
    return {
        type: DELETE_ALL_CART
    }
}