import React from "react";
import { connect } from "react-redux";

const TodoCompletedRate = ({ todo }) => {
  const total = todo.length;
  const completed = todo.filter(({ completed }) => completed === true).length;
  const completeRate = Math.round(completed / total * 100);

  return (
    <div className="todolist__completed__rate">
      {`${completeRate}%`}
      <span className="todolist__completed__rate-text"> completed</span>
    </div>
  );
};

const mapStateToProps = ({ todo }) => ({ todo });

export default connect(mapStateToProps)(TodoCompletedRate);
