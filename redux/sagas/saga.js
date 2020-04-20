import { all, put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { ENDPOINT, LOAD_DATA } from "../../utils/constants";

import { loadDataFailure, loadDataSuccess } from "../actions/actions";

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const res = yield fetch(ENDPOINT);
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(LOAD_DATA, loadDataSaga),
  ]);
}

export default rootSaga;
