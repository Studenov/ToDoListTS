import React, { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CombineReducers } from '../../store/index';
import { signInUser, signInUserAction } from '../../store/auth/actions';
import * as StyledBlock from '../styled-components/blocks';
import * as StyledForm from '../styled-components/auth';

type DispatchActions = {
  type: signInUserAction 
}
type EventTarget = {
  target: {
    value: string
  } 
}
export type Props = {
  loginUser: (email: string, password: string) => void,
  error: string
}

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  function handleChangeValue({ target }: EventTarget) {
    setValue(target.value);
  }

  return {
    value,
    onChange: handleChangeValue
  }
}

const SignIn = ({ error, loginUser }: Props) => {
  const email = useFormInput('');
  const password = useFormInput('');
  return (
    <StyledBlock.Wrapper>
      <StyledForm.Block>
        <StyledForm.Form>
          <StyledForm.InputBlock>
            <StyledForm.Input type="email" id="email" placeholder="email@email.com" {...email} />
            <StyledForm.Label htmlFor="email">Email</StyledForm.Label>
          </StyledForm.InputBlock>
          <StyledForm.InputBlock>
            <StyledForm.Input type="password" id="password" placeholder="password" {...password}/>
            <StyledForm.Label htmlFor="password">Password</StyledForm.Label>
          </StyledForm.InputBlock>
          <button onClick={() => loginUser(email.value, password.value)}>Sign In</button>
        </StyledForm.Form>
      </StyledForm.Block>
    </StyledBlock.Wrapper>
  )
}

const mapStateToProps = (store: CombineReducers) => ({
  error: store.dataError.message
});

const mapActionsToProps = (dispatch: Dispatch<DispatchActions>) => bindActionCreators({
  loginUser: signInUser
}, dispatch);

export const SignInConnect = connect(mapStateToProps, mapActionsToProps)(SignIn);