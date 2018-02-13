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
        <div key={_id}>
          <p>{title}</p>
          <p>{text}</p>
          {completed ? (
            <div>
              <p>COMPLETED</p>
              <p>CompletedAt: {completedAt}</p>
            </div>
          ) : (
            <p>YET TO BE COMPLETED</p>
          )}
        </div>
      ));
  }

  render() {
    return (
      <div>
        {this.renderTodo()}
        <Link to={`/todo/edit/${this.props.match.params.id}`}>edit</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps, actions)(Todo);

// todo: todo.find(todo => todo._id === props.match.params.id)
