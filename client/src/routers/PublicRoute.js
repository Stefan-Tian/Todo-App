import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

export const PublicRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => {
      switch (auth) {
        case null:
          return <Loading />;
        case false:
          return <Component {...props} />;
        default:
          return <Redirect to="/todos" />;
      }
    }}
  />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PublicRoute);
