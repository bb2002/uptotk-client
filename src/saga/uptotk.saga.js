import {generateSagaStructure} from "./index";
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  UPTOTK_UPLOAD_POST,
  uptotkUploadPostFailure,
  uptotkUploadPostLoading,
  uptotkUploadPostSuccess
} from "../modules/uptotk.redux";
import {uptotkUploadPostAxios} from "../libs/axios/uptotk.axios";

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

export function* uptotkSaga() {
  yield takeLatest(UPTOTK_UPLOAD_POST, uptotkUploadPostSaga());
}