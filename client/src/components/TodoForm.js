import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import formField from "./formField";
import TodoField from "./TodoField";

class TodoForm extends Component {
  renderFields() {
    return _.map(formField, ({ label, name }) => (
      <Field
        key={name}
        component={TodoField}
        type="text"
        label={label}
        name={name}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onTodoSubmit}>
          {this.renderFields()}
          <Link to="/todos">Cancel</Link>
          <button type="submit">Next</button>
        </form>
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
