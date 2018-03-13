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
        <div className="todoform__input" key={_id}>
          <p className="todoform__input--title-label">Title</p>
          <Field
            className="todoform__input--title-field"
            component="input"
            type="text"
            name="title"
            placeholder={title}
          />
          <p className="todoform__input--text-label">Description</p>
          <Field
            className="todoform__input--text-field"
            component="textarea"
            name="text"
            placeholder={text}
          />
          {/* <p className="todoform__input--complete-label">Completed</p> */}
          {/* {completed ? (
            <div className="todoform__input--complete-field">
              <Field
                className="modify-checkbox"
                component="input"
                type="checkbox"
                label="completed"
                name="completed"
                checked
              />
            </div>
          ) : (
            <div className="todoform__input--complete-field">
              <Field
                className="modify-checkbox"
                component="input"
                type="checkbox"
                label="completed"
                name="completed"
              />
            </div>
          )} */}
          <button className="todoform__input--done" type="submit">
            Done
          </button>
        </div>
      ));
  }

  onSubmit(values) {
    console.log(values);
    const { id } = this.props.match.params;
    const { history } = this.props;
    this.props.editTodo(id, values, history);
  }

  render() {
    const { handleSubmit } = this.props; // coming from redux

    return (
      <div className="todoform">
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))} // redux things first then call our function
        >
          {this.renderFields()}
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
