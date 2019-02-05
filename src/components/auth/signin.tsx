import React, { ChangeEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CombineReducers } from '../../store/index';
import { signInUser, signInUserAction } from '../../store/auth/actions';
import { clearMessage } from '../../store/error/actions';
import * as StyledBlock from '../styled-components/blocks';
import * as StyledForm from '../styled-components/auth';


type State = {
  email: string,
  password: string,
  loading: boolean,
  showError: boolean
}
type Props = {
  loginUser: (email: string, password: string) => void,
  error: string,
  code: number,
  clearError: () => void
}
type DispatchActions = {
  type: signInUserAction 
}

class SignIn extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    loading: false,
    showError: false
  }

  componentWillReceiveProps(nextProps: Props) {
    const { error, code } = nextProps;
    if (error && code === 1) this.setState({ loading: false, showError: true });
  }

  handleChangeEmail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { clearError } = this.props;
    clearError();
    this.setState({ email: target.value, showError: false });
  }

  handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { clearError } = this.props;
    clearError();
    this.setState({ password: target.value, showError: false });
  }

  keyPressEnter = (e: React.KeyboardEvent) => {
    const { loading } = this.state;
    if (loading) return;
    if (e.key === 'Enter') this.clickButtonAuth();
  }

  clickButtonAuth = async (event?: React.MouseEvent<HTMLElement>) => {
    const { email, password } = this.state;
    const { loginUser } = this.props;
    if (event !== undefined) {
      const node = event.target as HTMLButtonElement;
      const d = Math.max(node.clientWidth, node.clientHeight);
      const circle = document.createElement('div');
      circle.style.width = circle.style.height = d + 'px';
      circle.style.left = event.clientX - node.offsetLeft - d / 2 + 'px';
      circle.style.top = event.clientY - node.offsetTop - d / 2 + 'px';
      circle.classList.add('ripple');
      node.appendChild(circle);
      setTimeout(() => {
        node.removeChild(circle);
      }, 400);
    }
    loginUser(email, password);
    this.setState({ loading: true });
  }

  render() {
    const { email, password, loading, showError } = this.state;
    const { error } = this.props;
    const spinner = loading ? (
      <StyledForm.BackgroundSpinner>
        <StyledForm.SpinnerBlock>
          <StyledForm.Spinner />
          <StyledForm.Spinner />
          <StyledForm.Spinner />
          <StyledForm.Spinner />
        </StyledForm.SpinnerBlock>
      </StyledForm.BackgroundSpinner>
    ) : null;
    return (
      <StyledBlock.Wrapper>
        <StyledForm.Block>
          <StyledForm.BlockAuth>
            <StyledForm.ErrorBlock show={showError ? true : false}>
              <StyledForm.ErrorValue show={showError ? true : false}>
                {error}
              </StyledForm.ErrorValue>
            </StyledForm.ErrorBlock>
            <StyledForm.Form onKeyPress={this.keyPressEnter}>
              <StyledForm.InputBlock>
                <StyledForm.Input type="email" id="email" value={email} onChange={this.handleChangeEmail} />
                <StyledForm.Label htmlFor="email" value={email}>
                  Email
                </StyledForm.Label>
              </StyledForm.InputBlock>
              <StyledForm.InputBlock>
                <StyledForm.Input type="password" id="password" value={password} onChange={this.handleChangePassword}/>
                <StyledForm.Label htmlFor="password" value={password}>
                  Password
                </StyledForm.Label>
              </StyledForm.InputBlock>
                <StyledForm.Button onClick={this.clickButtonAuth} disabled={loading ? true : false}>
                  { loading ? (spinner) : 'Sign In' }
                  <span />
                </StyledForm.Button>
            </StyledForm.Form>
          </StyledForm.BlockAuth>
        </StyledForm.Block>
      </StyledBlock.Wrapper>
    );
  }
}

const mapStateToProps = (store: CombineReducers) => ({
  error: store.dataError.message,
  code: store.dataError.statusCode
});

const mapActionsToProps = (dispatch: Dispatch<DispatchActions>) => bindActionCreators({
  loginUser: signInUser,
  clearError: clearMessage
}, dispatch);

export const SignInConnect = connect(mapStateToProps, mapActionsToProps)(SignIn);