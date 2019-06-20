import { FETCH_FAILS, FETCH_SUCCESS, ADD_TO_CART, DELETE_TO_CART, SEND_TO_ORDER_SUCCESS, SEND_TO_ORDER_FAIL, DELETE_ALL_CART } from '../actions/actionType';

export const reducerProducts = (status = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return [...action.data];
        case FETCH_FAILS: {
            return [];
        }
        default:
            return status;    
    }
}

export const reducerCart = (status = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let checkCart = status.find(data => data.id === action.data.id);
            if(checkCart) {
                return status.map(data => {
                    if(data.id === action.data.id) {
                        if(action.data.qty) {
                            return {
                                ...data,
                                qty: action.data.qty,
                            }   
                        }
                        return {
                            ...data,
                            qty: data.qty + 1,
                        }
                    }
                    return data;
                })   
            }
            
            let data = {...action.data, qty: 1};
            return [...status, data];

        case DELETE_TO_CART:
            return status.filter(data => data.id !== action.data.id);
        case DELETE_ALL_CART:
            return [];  
        default:
            return status;
    }
}

export const reducerOrder = (status = {}, action) => {
    switch (action.type) {
        case SEND_TO_ORDER_SUCCESS:
            return { success: action.success};
        case SEND_TO_ORDER_FAIL: {
            return { ...action.errors };
        }
        default:
            return status;    
    }
}