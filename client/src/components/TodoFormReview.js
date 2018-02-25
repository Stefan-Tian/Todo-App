import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions";

const TodoFormReview = ({ onCancel, formValues, submitTodo, history }) => {
  return (
    <div className="todoform">
      <div className="todoform__review">
        <p className="todoform__review--instruction">
          Please confirm your todo
        </p>
        <p className="todoform__review--title-label">Title</p>
        <p className="todoform__review--title-content">{formValues["title"]}</p>
        <p className="todoform__review--text-label">Description</p>
        <p className="todoform__review--text-content">{formValues["text"]}</p>
        <button className="todoform__review--back" onClick={onCancel}>
          Back
        </button>
        <button
          className="todoform__review--confirm"
          onClick={() => submitTodo(formValues, history)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  formValues: form.todoForm.values
});

export default connect(mapStateToProps, actions)(withRouter(TodoFormReview));
