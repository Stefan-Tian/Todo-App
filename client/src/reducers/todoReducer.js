import { FETCH_TODOS, DELETE_TODO, EDIT_TODO } from "../actions/types";

const todoDefaultState = [];
export default (state = todoDefaultState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case DELETE_TODO:
      return state.filter(({ _id }) => _id !== action.payload);
    case EDIT_TODO:
      return state.map(todo => {
        if (todo._id === action.payload._id) {
          return {
            ...todo,
            ...action.payload
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
