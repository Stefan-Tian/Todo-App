import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";

export class EditTodo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderFields() {
    const { todo } = this.props;
    const { id } = this.props.match.params;

    return todo
      .filter(({ _id }) => _id === id)
      .map(({ _id, title, text, completed }) => (
        <div key={_id}>
          <div>
            <label>Title</label>
            <Field
              component="input"
              type="text"
              name="title"
              placeholder={title}
            />
          </div>
          <div>
            <label>Text</label>
            <Field
              component="input"
              type="text"
              name="text"
              placeholder={text}
            />
          </div>
          <div>
            <label>Completed</label>
            {completed ? (
              <Field
                component="input"
                type="checkbox"
                label="completed"
                name="completed"
                checked
              />
            ) : (
              <Field
                component="input"
                type="checkbox"
                label="completed"
                name="completed"
              />
            )}
          </div>
        </div>
      ));
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    const { history } = this.props;
    this.props.editTodo(id, values, history);
  }

  render() {
    const { handleSubmit } = this.props; // coming from redux

    return (
      <div>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))} // redux things first then call our function
        >
          {this.renderFields()}
          <button type="submit">Done</button>
        </form>
      </div>
    );
  }
}

EditTodo = reduxForm({
  form: "todoForm"
})(EditTodo);

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps, actions)(EditTodo);
