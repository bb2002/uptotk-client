import {useDispatch, useSelector} from "react-redux";
import {uptotkReset, uptotkUploadPost} from "../modules/uptotk.redux";

export default function useUploadPost() {
  const dispatch = useDispatch();
  const uptotk = useSelector((state) => state.uptotk);

  const uploadNewPost = (form, files) => {
    if (form.authMethod === 'open') {
      // open 의 경우 비밀번호는 보내지 말아야 한다.
      delete form.password;
    }
    dispatch(uptotkUploadPost({ form, files }))
  }

  const reset = () => {
    dispatch(uptotkReset());
  }

  return {
    uploadNewPost,
    reset,
    uploadPost: uptotk.uploadPost,
  }
}