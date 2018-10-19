import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

type State = {
  name: string,
  password: string,
  token: string,
  authSuccess: boolean
}

const initState: State = {
  name: '',
  password: '',
  token: '',
  authSuccess: false
}

type loginPayload = {
  name: string,
  password: string
}
type tokenPayload = {
  token: string
}

const signUpUser = (state: Object, { name, password }: loginPayload) => ({ ...state, name, password });
const signInUser = (state: Object, { name, password }: loginPayload) => ({ ...state, name, password });
const successAuthorizationUser = (state: Object, { token }: tokenPayload) => ({ ...state, token, authSuccess: true });
const sendTokenToRefresh = (state: Object) => ({ ...state });
const successRefreshToken = (state: Object, { token }: tokenPayload) => ({ ...state, token });
const logOutUser = (state: Object) => ({ ...state, name: '', password: '', token: '', authSuccess: false });

const handlers = {
  [TYPES.SIGN_UP_USER]: signUpUser,
  [TYPES.SIGN_IN_USER]: signInUser,
  [TYPES.SUCCESS_AUTHORIZATION_USER]: successAuthorizationUser,
  [TYPES.SEND_TOKEN_TO_REFRESH]: sendTokenToRefresh,
  [TYPES.SUCCESS_REFRESH_TOKEN]: successRefreshToken,
  [TYPES.LOG_OUT_USER]: logOutUser
}

export const authReduced = createReducer(initState, handlers);