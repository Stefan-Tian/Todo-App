import { FETCH_USER } from "../actions/types";

const authDefaultState = null;
const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // if there's nothing, return false.
    default:
      return state;
  }
};

export default authReducer;
