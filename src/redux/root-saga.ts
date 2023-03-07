import { all } from "redux-saga/effects";
import authSaga from "./saga/auth.saga";
import counterSaga from "./saga/counter.saga";

export default function* rootSaga() {
    yield all([
        ...counterSaga,
        ...authSaga
    ])
}