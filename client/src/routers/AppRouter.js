import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Header = () => <h1>Header</h1>;
const Login = () => <h1>Login</h1>;
const Todo = () => <h1>Todo</h1>;
const TodoNew = () => <h1>TodoNew</h1>;
const TodoList = () => <h1>TodoList</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <PublicRoute exact path="/" component={Login} />
            <PrivateRoute exact path="/todo/:id" component={Todo} />
            <PrivateRoute exact path="/create" component={TodoNew} />
            <PrivateRoute exact path="/todos" component={TodoList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
