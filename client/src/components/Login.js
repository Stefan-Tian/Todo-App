import React from "react";

const Login = () => (
  <div className="login-form">
    <h3 className="login-form__title">Sign in</h3>
    <a className="login-form__btn btn btn--google" href="/auth/google">
      Sign in with Google
    </a>
    <a className="login-form__btn btn btn--facebook" href="/auth/facebook">
      Sign in with Facebook
    </a>
  </div>
);

export default Login;
