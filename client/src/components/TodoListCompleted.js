import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

const TodoListCompleted = ({ todo, deleteTodo }) =>
  todo
    .filter(({ completed }) => completed === true)
    .map(({ _id, title }, index) => (
      <div className="todolist__completed__todo">
        <Link className="todolist__completed__todo__title" to={`/todo/${_id}`}>
          <p>
            {index + 1}. {title}
          </p>
        </Link>
        <button
          className="todolist__completed__todo__btn"
          onClick={() => deleteTodo(_id)}
        >
          REMOVE
        </button>
      </div>
    ));

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps, actions)(TodoListCompleted);
