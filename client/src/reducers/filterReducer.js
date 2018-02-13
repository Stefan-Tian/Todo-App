import { SET_TEXT_FILTER, SORT_OUT_COMPLETED } from "../actions/types";

const filterDefaultState = { text: "", completeStatus: undefined };
export default (state = filterDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.payload
      };
    case SORT_OUT_COMPLETED:
      return {
        ...state,
        completeStatus: action.payload
      };
    default:
      return state;
  }
};
