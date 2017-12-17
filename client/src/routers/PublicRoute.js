import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

export const PublicRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => {
      if (auth === null) {
        return <Loading />;
      }

      return !!auth ? <Redirect to="/todos" /> : <Component {...props} />;
    }}
  />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PublicRoute);
