import React from 'react';
import {
  Route, Switch, Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import { CombineReducers } from '../../store/index';
import { Home } from '../containers/home';
import { SignUpConnect } from '../auth/signup';
import { SignInConnect } from '../auth/signin';
import { DashBoard } from '../containers/dashboard';


type StateToProps = {
  token: string
}

type UserRoute = {
  component: any,
  token: string,
  exact: boolean,
  path: string
}

const PrivateRoute = ({ component: Component, token, ...rest }: UserRoute) => (
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

const PublicRoute = ({ component: Component, token, ...rest }: UserRoute) => (
  <Route
    {...rest}
    render={props => (token === ''
      ? <Component {...props} />
      : <Redirect to="/dashboard" />)}
  />
);

const Navigator = ({ token }: StateToProps) => (
  <Switch>
    <PublicRoute exact path="/" component={Home} token={token} />
    <PublicRoute exact path="/signup" component={SignUpConnect} token={token} />
    <PublicRoute exact path="/signin" component={SignInConnect} token={token} />
    <PrivateRoute exact path="/dashboard" component={DashBoard} token={token} />
  </Switch>
);

const mapStateToProps = (store: CombineReducers) => ({
  token: store.dataAuth.token
});

export const NavigatorConnect = withRouter(connect(mapStateToProps)(Navigator));
