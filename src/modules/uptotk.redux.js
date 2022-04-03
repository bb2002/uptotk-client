import {createAction, handleActions} from "redux-actions";
import produce from "immer";

export const UPTOTK_UPLOAD_POST ='uptotk.upload.post';
export const UPTOTK_UPLOAD_POST_SUCCESS = 'uptotk.upload.post_SUCCESS';
export const UPTOTK_UPLOAD_POST_FAILURE = 'uptotk.upload.post_FAILURE';
export const UPTOTK_UPLOAD_POST_LOADING = 'uptotk.upload.post_LOADING';

export const UPTOTK_RESET = 'uptotk_RESET';

export const uptotkUploadPost = createAction(UPTOTK_UPLOAD_POST, data => data);
export const uptotkUploadPostSuccess = createAction(UPTOTK_UPLOAD_POST_SUCCESS, easyUUID => easyUUID);
export const uptotkUploadPostFailure = createAction(UPTOTK_UPLOAD_POST_FAILURE, ex => ex);
export const uptotkUploadPostLoading = createAction(UPTOTK_UPLOAD_POST_LOADING, loading => loading);
export const uptotkReset = createAction(UPTOTK_RESET);

const initialState = {
  uploadPost: {
    code: 0,
    easyUUID: null,
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
  [UPTOTK_RESET]: () => initialState,
}, initialState);

export default uptotk;