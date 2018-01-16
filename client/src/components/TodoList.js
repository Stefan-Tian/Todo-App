import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    return this.props.todo.map(todo => (
      <div key={todo._id}>
        <label>Title</label>
        <p>{todo.title}</p>
        <label>Text</label>
        <p>{todo.text}</p>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
        <Link to="/create">New Todo</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps, actions)(TodoList);
