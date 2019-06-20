import { getAllProductApi } from './ApiProduct';
import { getToOrder } from './ApiCart';
import { FETCH_FAILS, FETCH_PRODUCTS, FETCH_SUCCESS, SEND_TO_ORDER, SEND_TO_ORDER_FAIL, SEND_TO_ORDER_SUCCESS, DELETE_ALL_CART } from '../actions/actionType';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* fetchProducts() {
    try {
        const dataProducts = yield getAllProductApi();

        yield put({ type:FETCH_SUCCESS, data: dataProducts })
    } catch (error) {
        yield put({ type: FETCH_FAILS, error })
    }
}

export function* watchFetchProducts() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

function* sendOrder(data) {
        const sendOrder = yield getToOrder(data);
        if(sendOrder.success) {
            yield put({ type: SEND_TO_ORDER_SUCCESS, success: sendOrder.success });
            yield put({ type: DELETE_ALL_CART });
        } else {
            yield put({ type: SEND_TO_ORDER_FAIL, errors: sendOrder.errors })
        }
}

export function* watchSendOrder() {
    yield takeLatest(SEND_TO_ORDER, sendOrder);
}