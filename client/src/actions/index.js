import axios from "axios";

import { FETCH_USER, SUBMIT_TODO, FETCH_TODOS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTodo = (values, history) => async dispatch => {
  const res = await axios.post("/api/todos", values);

  history.push("/todos");
  dispatch({ type: SUBMIT_TODO, payload: res.data });
};

export const fetchTodos = () => async dispatch => {
  const res = await axios.get("/api/todos");

  dispatch({ type: FETCH_TODOS, payload: res.data });
};
