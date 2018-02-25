import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class TodoListFilter extends Component {
  onTextChange = e => this.props.setTextFilter(e.target.value);
  onSortChange = e => {
    switch (e.target.value) {
      case "true":
        return this.props.sortOutCompleted(true);
      case "false":
        return this.props.sortOutCompleted(false);
      default:
        return this.props.sortOutCompleted();
    }
  };

  render() {
    return (
      <div>
        <input
          className="todo-searchbar"
          type="text"
          placeholder="Search Todo"
          value={this.props.filter.text}
          onChange={this.onTextChange}
        />
        {/* <select
          value={this.props.filter.completed}
          onChange={this.onSortChange}
        >
          <option value="no">All</option>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select> */}
      </div>
    );
  }
}

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps, actions)(TodoListFilter);
