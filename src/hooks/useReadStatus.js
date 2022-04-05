import {useDispatch, useSelector} from "react-redux";
import {uptotkReadStatus} from "../modules/uptotk.redux";

export default function useReadStatus() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.uptotk.status);

  const readStatus = () => {
    dispatch(uptotkReadStatus());
  }

  return {
    readStatus,
    status,
  }
}