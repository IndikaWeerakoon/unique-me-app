import { put, takeLatest } from 'redux-saga/effects';
import { increment, initialize, trigger } from '../slices/counter.slice';

function * counterIncrease ({payload}: {payload: {type: 'increase'|'zero'}}) {
    const type = payload.type;
    if (type === 'increase') {
        yield put(increment());
    } else {
        yield put(initialize())
    }
}

const counterSaga = [
    takeLatest(trigger, counterIncrease)
]

export default counterSaga;