import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TodoForm from "./TodoForm";
import TodoFormReview from "./TodoFormReview";

class TodoNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TodoFormReview
          onCancel={() => this.setState(() => ({ showFormReview: false }))}
        />
      );
    }

    return (
      <TodoForm
        onTodoSubmit={() => this.setState(() => ({ showFormReview: true }))}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "todoForm"
})(TodoNew);
