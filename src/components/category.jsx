
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fantasy from "../data/fantasy";
import history from "../data/history";
import horror from "../data/horror";
import romance from "../data/romance";
import scifi from "../data/scifi";
import Carton from "./Carton";
import { apiCall, setOriginal } from "./reducers/api";

export default function Category() {
  const dispatch = useDispatch();
  const { categoria } = useSelector((state) => state.api);

  useEffect(() => {
    switch (categoria) {
      case "fantasy":
        dispatch(apiCall(fantasy));
        dispatch(setOriginal(fantasy));
        break;
      case "romance":
        dispatch(apiCall(romance));
        dispatch(setOriginal(romance));
        break;
      case "horror":
        dispatch(apiCall(horror));
        dispatch(setOriginal(horror));
        break;
      case "scifi":
        dispatch(apiCall(scifi));
        dispatch(setOriginal(scifi));
        break;
      case "history":
        dispatch(apiCall(history));
        dispatch(setOriginal(history));
        break;
      default:
        dispatch(apiCall(fantasy));
        dispatch(setOriginal(fantasy));
        break;
    }
  }, [categoria, dispatch]);

  return <Carton />;
}
