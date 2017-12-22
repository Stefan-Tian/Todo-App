import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formField from "./formField";
import * as actions from "../actions";

const TodoFormReview = ({ onCancel, formValues, submitTodo, history }) => {
  const reviewFields = _.map(formField, ({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your todo</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitTodo(formValues, history)}>Confirm</button>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  formValues: form.todoForm.values
});

export default connect(mapStateToProps, actions)(withRouter(TodoFormReview));
