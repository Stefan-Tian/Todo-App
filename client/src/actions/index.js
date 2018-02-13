import axios from "axios";

import {
  FETCH_USER,
  SUBMIT_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_TEXT_FILTER,
  SORT_OUT_COMPLETED
} from "./types";

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

export const fetchTodo = id => async dispatch => {
  const res = await axios.get(`/api/todos/${id}`);

  dispatch({ type: FETCH_TODO, payload: res.data });
};

export const deleteTodo = id => async dispatch => {
  const res = await axios.delete(`/api/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: res.data });
};

export const editTodo = (id, values, history) => async dispatch => {
  const res = await axios.patch(`/api/todos/${id}`, values);
  await dispatch({ type: EDIT_TODO, payload: res.data });
  history.push("/todos");
};

export const setTextFilter = (text = "") => dispatch => {
  dispatch({ type: SET_TEXT_FILTER, payload: text });
};

export const sortOutCompleted = (completeStatus = undefined) => dispatch => {
  dispatch({ type: SORT_OUT_COMPLETED, payload: completeStatus });
};
