import { FETCH_USER } from "../actions/types";

const authDefaultState = null;
const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
