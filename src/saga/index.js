import {all, put} from 'redux-saga/effects';
import {uptotkSaga} from "./uptotk.saga";

export function generateSagaStructure(loading, funOfTry, funOfCatch) {
  return function* (action) {
    yield put(loading(true))
    try {
      yield funOfTry(action);
    } catch(ex) {
      yield funOfCatch(ex);
    }

    yield put(loading(false))
  }
}

export function* rootSaga() {
  yield all([uptotkSaga()]);
}