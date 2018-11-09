import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Home } from '../containers/home';
import { SignUpConnect } from '../auth/signup';
import { SignInConnect } from '../auth/signin';
import { DashBoard } from '../containers/dashboard';

const Navigator = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUpConnect} />
    <Route path="/signin" component={SignInConnect} />
    <Route path="/dashboard" component={DashBoard} />
  </Switch>
);

export const NavigatorConnect = withRouter(Navigator);
