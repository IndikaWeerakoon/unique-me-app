import { all } from "redux-saga/effects";
import counterSaga from "./saga/counter.saga";

export default function* rootSaga() {
    yield all([
        ...counterSaga,
    ])
}