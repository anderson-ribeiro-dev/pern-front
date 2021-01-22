import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Produto from "../pages/Produto";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Produto} />
        <PrivateRoute path="/app" component={Home} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
