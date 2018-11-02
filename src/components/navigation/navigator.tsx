import React from 'react';
import {
  Route, Switch, Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Home } from '../containers/home';
import { SignUpConnect } from '../auth/signup';
import { SignInConnect } from '../auth/signin';
import { DashBoard } from '../containers/dashboard';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (token) {
        return <Component {...props} />;
      }
      return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
    }
      }
  />
);

const PublicRoute = ({ component: Component, token, ...rest }) => {
  console.log(token);
  return (
    <Route
      {...rest}
      render={props => (token === ''
        ? <Component {...props} />
        : <Redirect to="/dashboard" />)}
    />
  );
};

const Navigator = ({ token }) => (
  <Switch>
    <PublicRoute exact path="/" component={Home} token={token} />
    <PublicRoute exact path="/signup" component={SignUpConnect} token={token} />
    <PublicRoute exact path="/signin" component={SignInConnect} token={token} />
    <PrivateRoute exact path="/dashboard" component={DashBoard} token={token} />
  </Switch>
);

const mapStateToProps = store => ({
  token: store.dataAuth.token
});

export const NavigatorConnect = withRouter(connect(mapStateToProps, null)(Navigator));
