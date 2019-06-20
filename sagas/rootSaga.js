import { call, fork } from 'redux-saga/effects';
import { watchFetchProducts, watchSendOrder} from './ProductSaga';

export default function* rootSaga() {
    // yield call(watchFetchProducts)
    // yield call(watchSendOrder)

    yield fork(watchFetchProducts);
    yield fork(watchSendOrder);
}