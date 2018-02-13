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
    return this.props.todo.map(({ _id, title, text }) => (
      <div key={_id}>
        <Link to={`/todo/${_id}`}>
          <p>{title}</p>
          <p>{text}</p>
        </Link>
        <button onClick={() => this.props.deleteTodo(_id)}>REMOVE</button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <TodoListFilter />
        {this.renderTodos()}
        <Link to="/create">New Todo</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ todo, filter }) => ({
  todo: filterTodos(todo, filter)
});

export default connect(mapStateToProps, actions)(TodoList);
