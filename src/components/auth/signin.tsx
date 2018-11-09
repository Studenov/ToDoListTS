import React, { RefObject } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CombineReducers } from '../../store/index';
import { signInUser, signInUserAction } from '../../store/auth/actions';
import * as StyledBlock from '../styled-components/blocks';
import * as StyledForm from '../styled-components/auth';


type State = {
  email: string,
  password: string
}
type Props = {
  loginUser: (email: string, password: string) => void,
  error: string
}
type DispatchActions = {
  type: signInUserAction 
}
type EventMouseClick = {
  clientX: number,
  clientY: number,
  target: {
    clientWidth: number,
    clientHeight: number,
    offsetLeft: number,
    offsetTop: number,
    appendChild: (circle: Element) => void,
    removeChild: (circle: Element) => void
  }
}
type EventTarget = {
  target: {
    value: string
  } 
}

class SignIn extends React.Component<Props, State> {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = ({ target }: EventTarget) => {
    this.setState({ email: target.value });
  }

  handleChangePassword = ({ target }: EventTarget) => {
    this.setState({ password: target.value });
  }

  clickButtonAuth = (event: EventMouseClick) => {
    const node = event.target;
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

  render() {
    const { email, password } = this.state;
    const { error, loginUser } = this.props;
    return (
      <StyledBlock.Wrapper>
        <StyledForm.Block>
          <StyledForm.BlockAuth>
            <StyledForm.Form>
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
              <StyledForm.ButtonBlock>
                <StyledForm.Button onClick={this.clickButtonAuth}>
                  Sign In
                </StyledForm.Button>
              </StyledForm.ButtonBlock>
            </StyledForm.Form>
          </StyledForm.BlockAuth>
        </StyledForm.Block>
      </StyledBlock.Wrapper>
    );
  }
}

const mapStateToProps = (store: CombineReducers) => ({
  error: store.dataError.message
});

const mapActionsToProps = (dispatch: Dispatch<DispatchActions>) => bindActionCreators({
  loginUser: signInUser
}, dispatch);

export const SignInConnect = connect(mapStateToProps, mapActionsToProps)(SignIn);