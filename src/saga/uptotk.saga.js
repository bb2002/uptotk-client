import {generateSagaStructure} from "./index";
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  UPTOTK_READ_POST,
  UPTOTK_UPLOAD_POST, uptotkReadPostFailure, uptotkReadPostLoading, uptotkReadPostSuccess,
  uptotkUploadPostFailure,
  uptotkUploadPostLoading,
  uptotkUploadPostSuccess
} from "../modules/uptotk.redux";
import {uptotkReadPostAxios, uptotkUploadPostAxios} from "../libs/axios/uptotk.axios";

function uptotkUploadPostSaga() {
  function* funOfTry({ payload }) {
    const form = payload.form;
    const files = payload.files;

    const res = yield call(uptotkUploadPostAxios, {
      form: form,
      files: files,
    });
    yield put(uptotkUploadPostSuccess(res.data));
  }

  function* funOfCatch(ex) {
    yield put(uptotkUploadPostFailure(ex));
  }

  return generateSagaStructure(uptotkUploadPostLoading, funOfTry, funOfCatch);
}

function uptotkReadPostSaga() {
  function* funOfTry({ payload }) {
    const easyUUID = payload.easyUUID;
    const password = payload.password;

    const res = yield call(uptotkReadPostAxios, {
      easyUUID, password
    });
    yield put(uptotkReadPostSuccess(res.data));
  }

  function* funOfCatch(ex) {
    yield put(uptotkReadPostFailure(ex));
  }

  return generateSagaStructure(uptotkReadPostLoading, funOfTry, funOfCatch);
}

export function* uptotkSaga() {
  yield takeLatest(UPTOTK_UPLOAD_POST, uptotkUploadPostSaga());
  yield takeLatest(UPTOTK_READ_POST, uptotkReadPostSaga());
}