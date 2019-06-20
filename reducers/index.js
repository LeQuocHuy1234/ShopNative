import { combineReducers } from 'redux';
import { reducerProducts, reducerCart, reducerOrder } from './reducers';

const allReducers = combineReducers({
    reducerProducts,
    reducerCart,
    reducerOrder
});

export default allReducers;