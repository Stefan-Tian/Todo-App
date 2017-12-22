import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  auth: authReducer,
  filter: filterReducer,
  todo: todoReducer,
  form: formReducer
});
