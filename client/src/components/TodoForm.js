import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import formField from "../components/formField";

class TodoForm extends Component {
  renderFields() {
    return (
      <div className="todoform__new">
        <p className="todoform__new--title-label">Title</p>
        <Field
          className="todoform__new--title-field"
          component="input"
          type="input"
          name="title"
        />
        <p className="todoform__new--text-label">Description</p>
        <Field
          className="todoform__new--text-field"
          component="textarea"
          name="text"
        />
        <Link className="todoform__new--cancel" to="/todos">
          Cancel
        </Link>
        <button className="todoform__new--next" type="submit">
          Next
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="todoform">
        <form onSubmit={this.props.onTodoSubmit}>{this.renderFields()}</form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formField, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must fill the ${name} field!`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "todoForm",
  destroyOnUnmount: false
})(TodoForm);
