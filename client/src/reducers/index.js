import { combineReducers } from "redux";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  auth: authReducer,
  filter: filterReducer,
  todo: todoReducer
});
