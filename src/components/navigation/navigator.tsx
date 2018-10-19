import React, { Component } from 'react';
import {
  Route, withRouter, Switch, Redirect,
  RouteComponentProps, RouteProps
} from 'react-router-dom';

import { Home } from '../containers/home';
import SingUp from '../auth/signup';
import SingIn from '../auth/signin';
import Main from '../containers/main';

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>




const PrivateRoute: React.StatelessComponent<RouteProps> = ({ component, ...rest }) => {
  const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
    if (!Component) {
      return null;
    }
    
  }
};

export class Navigator extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route />
        <Route />
        <PrivateRoute />
      </Switch>
    );
  }
}
