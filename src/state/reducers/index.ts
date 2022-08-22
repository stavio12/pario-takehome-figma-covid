import { combineReducers } from "redux";
import covidReducer from "./covidReducer";

const reducers = combineReducers({
  Covid: covidReducer,
});

export default reducers;
