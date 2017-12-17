import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

export const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => {
      if (auth === null) {
        return <Loading />;
      }

      return !!auth ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
