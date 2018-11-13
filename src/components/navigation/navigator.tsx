import React from 'react';
import {
  Route, Switch, withRouter,
  Redirect, RouteProps
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Home } from '../containers/home';
import { SignUpConnect } from '../auth/signup';
import { SignInConnect } from '../auth/signin';
import { DashBoard } from '../containers/dashboard';
import { CombineReducers } from '../../store';

type Props = {
  token: string
}
interface PrivareRouteInterface extends RouteProps {
  token: string
}

const PrivateRoute = ({ component: Component, ...rest }: PrivareRouteInterface) => (
  <Route
    {...rest}
    render={props => rest.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/signin',
          state: props.location
        }}
      />
    )}
  />
);

const Navigator = ({ token }: Props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUpConnect} />
    <Route path="/signin" component={SignInConnect} />
    <PrivateRoute path="/dashboard" component={DashBoard} token={token} />
  </Switch>
);

const mapStateToProps = (store: CombineReducers) => ({
  token: store.dataAuth.token
});

export const NavigatorConnect = withRouter(connect(mapStateToProps)(Navigator));
