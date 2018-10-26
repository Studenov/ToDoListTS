import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { signInUser, signInUserAction } from '../../store/auth/actions';

type State = {
  email: string,
  password: string
}
type Store = {
  dataError: {
    message: object
  }
}
type DispatchActions = {
  type: signInUserAction 
}
type EventTarget = {
  target: {
    value: string
  } 
}
type Props = {
  loginUser: (email: string, password: string) => void
}

class SignIn extends React.Component<Props, State> {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = ({ target }: EventTarget) => this.setState({ email: target.value });  

  handleChangePassword = ({ target }: EventTarget) => this.setState({ password: target.value });

  login = () => {
    const { email, password } = this.state;
    const { loginUser } = this.props;
    loginUser(email, password);
  }

  render() {
    return (
      <div>
        <input type="email" onChange={this.handleChangeEmail}/>
        <input type="password" onChange={this.handleChangePassword}/>
        <button onClick={this.login}>Sign In</button>
      </div>
    );
  }
}

const mapStateToProps = (store: Store) => ({
  error: store.dataError.message
});

const mapActionsToProps = (dispatch: Dispatch<DispatchActions>) => bindActionCreators({
  loginUser: signInUser
}, dispatch);

export const SignInConnect = connect(mapStateToProps, mapActionsToProps)(SignIn);