import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => {
      switch (auth) {
        case null:
          return <Loading />;
        case false:
          return <Redirect to="/" />;
        default:
          return (
            <div>
              <Header />
              <Component {...props} />
            </div>
          );
      }
    }}
  />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
