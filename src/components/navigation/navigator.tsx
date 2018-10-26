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

const PublicRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (!token
      ? <Component {...props} />
      : <Redirect to="/" />)}
  />
);

const Navigator = () => (
  <Switch>
    <PublicRoute exact path="/" component={Home} />
    <PublicRoute exact path="/signup" component={SignUpConnect} />
    <PublicRoute exact path="/signin" component={SignInConnect} />
    <PrivateRoute exact path="/dashboard" component={DashBoard} />
  </Switch>
);

const mapStateToProps = store => ({
  token: store.dataAuth.token
});

export const NavigatorConnect = withRouter(connect(mapStateToProps, null)(Navigator));
