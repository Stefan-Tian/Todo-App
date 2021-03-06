import React from "react";

export default ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} />
    <div>{touched && error}</div>
  </div>
);
