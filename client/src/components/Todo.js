import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

export class Todo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodo() {
    const id = this.props.match.params.id;
    return this.props.todo
      .filter(({ _id }) => _id === id)
      .map(({ _id, title, text, completed, completedAt }) => (
        <div className="todoform__text" key={_id}>
          <p className="todoform__text--title">{title}</p>
          <p className="todoform__text--text">{text}</p>
          {completed ? (
            <div className="todoform__text--complete">
              <p>Status: COMPLETED</p>
              <p>CompletedAt: {completedAt}</p>
            </div>
          ) : (
            <p className="todoform__text--complete">
              status: YET TO BE COMPLETED
            </p>
          )}
          <Link
            className="todoform__text--edit-btn"
            to={`/todo/edit/${this.props.match.params.id}`}
          >
            Edit
          </Link>
        </div>
      ));
  }

  render() {
    return <div className="todoform">{this.renderTodo()}</div>;
  }
}

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps, actions)(Todo);

// todo: todo.find(todo => todo._id === props.match.params.id)
