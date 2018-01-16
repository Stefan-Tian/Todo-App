import { FETCH_TODOS } from "../actions/types";

const todoDefaultState = [];
export default (state = todoDefaultState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
