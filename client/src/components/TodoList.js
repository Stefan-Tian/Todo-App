import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import TodoListFilter from "./TodoListFilter";
import { filterTodos } from "../selectors/todo";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return this.props.todo.map(({ _id, title }, index) => (
      <div className="todolist__not-completed__todo" key={_id}>
        <Link
          className="todolist__not-completed__todo__title"
          to={`/todo/${_id}`}
        >
          <p>
            {index + 1}. {title}
          </p>
        </Link>
        <button
          className="todolist__not-completed__todo__btn"
          onClick={() => this.props.deleteTodo(_id)}
        >
          REMOVE
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div className="content-container">
        <div className="todolist">
          <div className="todolist__not-completed">
            <TodoListFilter />
            {this.renderTodos()}
            <div className="todolist--grid">
              <Link className="todolist--grid__new" to="/create">
                New Task
              </Link>
            </div>
          </div>
          <div className="todolist__completed" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ todo, filter }) => ({
  todo: filterTodos(todo, filter)
});

export default connect(mapStateToProps, actions)(TodoList);
