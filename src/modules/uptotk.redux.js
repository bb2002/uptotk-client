import {createAction, handleActions} from "redux-actions";
import produce from "immer";

export const UPTOTK_UPLOAD_POST ='uptotk.upload.post';
export const UPTOTK_UPLOAD_POST_SUCCESS = 'uptotk.upload.post_SUCCESS';
export const UPTOTK_UPLOAD_POST_FAILURE = 'uptotk.upload.post_FAILURE';
export const UPTOTK_UPLOAD_POST_LOADING = 'uptotk.upload.post_LOADING';

export const UPTOTK_READ_POST = 'uptotk.read.post';
export const UPTOTK_READ_POST_SUCCESS = 'uptotk.read.post_SUCCESS';
export const UPTOTK_READ_POST_FAILURE = 'uptotk.read.post_FAILURE';
export const UPTOTK_READ_POST_LOADING = 'uptotk.read.post_LOADING';

export const UPTOTK_READ_STATUS = 'uptotk.read.status';
export const UPTOTK_READ_STATUS_SUCCESS = 'uptotk.read.status_SUCCESS';
export const UPTOTK_READ_STATUS_FAILURE = 'uptotk.read.status_FAILURE';
export const UPTOTK_READ_STATUS_LOADING = 'uptotk.read.status_LOADING';

export const UPTOTK_RESET = 'uptotk_RESET';

export const uptotkUploadPost = createAction(UPTOTK_UPLOAD_POST, data => data);
export const uptotkUploadPostSuccess = createAction(UPTOTK_UPLOAD_POST_SUCCESS, easyUUID => easyUUID);
export const uptotkUploadPostFailure = createAction(UPTOTK_UPLOAD_POST_FAILURE, ex => ex);
export const uptotkUploadPostLoading = createAction(UPTOTK_UPLOAD_POST_LOADING, loading => loading);

export const uptotkReadPost = createAction(UPTOTK_READ_POST, data => data);
export const uptotkReadPostSuccess = createAction(UPTOTK_READ_POST_SUCCESS, post => post);
export const uptotkReadPostFailure = createAction(UPTOTK_READ_POST_FAILURE, ex => ex);
export const uptotkReadPostLoading = createAction(UPTOTK_READ_POST_LOADING, loading => loading);

export const uptotkReadStatus = createAction(UPTOTK_READ_STATUS);
export const uptotkReadStatusSuccess = createAction(UPTOTK_READ_STATUS_SUCCESS, data => data);
export const uptotkReadStatusFailure = createAction(UPTOTK_READ_STATUS_FAILURE, ex => ex);
export const uptotkReadStatusLoading = createAction(UPTOTK_READ_STATUS_LOADING, loading => loading);

export const uptotkReset = createAction(UPTOTK_RESET);

const initialState = {
  uploadPost: {
    code: 0,
    easyUUID: null,
    error: null,
    loading: false,
  },
  readPost: {
    code: 0,
    data: null,
    error: null,
    loading: false,
  },
  status: {
    code: 0,
    data: null,
    error: null,
    loading: false,
  }
}

const uptotk = handleActions({
  [UPTOTK_UPLOAD_POST_SUCCESS]: (state, { payload }) => produce(state, draft => {
    draft.uploadPost.code = 200;
    draft.uploadPost.easyUUID = payload.easyUUID;
    draft.uploadPost.error = null;
  }),
  [UPTOTK_UPLOAD_POST_FAILURE]: (state, { payload }) => produce(state, draft => {
    draft.uploadPost.code = payload.response?.status ?? -1;
    draft.uploadPost.easyUUID = null;
    draft.uploadPost.error = payload;
  }),
  [UPTOTK_UPLOAD_POST_LOADING]: (state, { payload }) => produce(state, draft => {
    draft.uploadPost.loading = payload;
  }),
  [UPTOTK_READ_POST_SUCCESS]: (state, { payload }) => produce(state, draft => {
    draft.readPost.code = 200;
    draft.readPost.data = payload;
    draft.readPost.error = null;
  }),
  [UPTOTK_READ_POST_FAILURE]: (state, { payload }) => produce(state, draft => {
    draft.readPost.code = payload.response?.status ?? -1;
    draft.readPost.easyUUID = null;
    draft.readPost.error = payload;
  }),
  [UPTOTK_READ_POST_LOADING]: (state, { payload }) => produce(state, draft => {
    draft.readPost.loading = payload;
  }),
  [UPTOTK_READ_STATUS_SUCCESS]: (state, { payload }) => produce(state, draft => {
    draft.status.code = 200;
    draft.status.data = payload;
    draft.status.error = null;
  }),
  [UPTOTK_READ_STATUS_FAILURE]: (state, { payload }) => produce(state, draft => {
    draft.status.code = payload.response?.status ?? -1;
    draft.status.data = null;
    draft.status.error = payload;
  }),
  [UPTOTK_READ_STATUS_LOADING]: (state, { payload }) => produce(state, draft => {
    draft.status.loading = payload;
  }),
  [UPTOTK_RESET]: (state) => ({
    ...initialState,
    ...state.status,  // 통계자료는 초기화 하지 않는다.
  }),
}, initialState);

export default uptotk;