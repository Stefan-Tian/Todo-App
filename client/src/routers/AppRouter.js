import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../components/Login";
import TodoNew from "../components/TodoNew";
import TodoList from "../components/TodoList";

const Todo = () => <h1>Todo</h1>;

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <PublicRoute exact path="/" component={Login} />
              <PrivateRoute exact path="/todo/:id" component={Todo} />
              <PrivateRoute exact path="/create" component={TodoNew} />
              <PrivateRoute exact path="/todos" component={TodoList} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
