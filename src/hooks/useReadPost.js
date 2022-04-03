import {useDispatch, useSelector} from "react-redux";
import {uptotkReadPost} from "../modules/uptotk.redux";

export default function useReadPost() {
  const dispatch = useDispatch();
  const uptotk = useSelector(state => state.uptotk);

  const readPost = (easyUUID, password) => {
    dispatch(uptotkReadPost({ easyUUID, password }))
  }

  return {
    readPost,
    post: uptotk.readPost
  }
}