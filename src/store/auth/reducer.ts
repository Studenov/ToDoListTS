import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export type StateAuth = {
  email: string,
  password: string,
  token: string,
  authSuccess: boolean
}
type loginPayload = {
  email: string,
  password: string
}
type tokenPayload = {
  token: string
}
type ActionHandlerLoginUser<T> = (state: StateAuth, payload: T) => StateAuth;
type ActionHandlerToken<T> = (state: StateAuth, payload: T) => StateAuth;
type ActionHandler = (state: StateAuth) => StateAuth;

const initState: StateAuth = {
  email: '',
  password: '',
  token: '',
  authSuccess: false
}

const signUpUser: ActionHandlerLoginUser<loginPayload> = (state: StateAuth, { email, password }) => ({ ...state, email, password });
const signInUser: ActionHandlerLoginUser<loginPayload> = (state: StateAuth, { email, password }) => ({ ...state, email, password });
const successAuthorizationUser: ActionHandlerToken<tokenPayload> = (state: StateAuth, { token }) => ({ ...state, token, authSuccess: true });
const sendTokenToRefresh: ActionHandler = (state: StateAuth) => ({ ...state });
const successRefreshToken: ActionHandlerToken<tokenPayload> = (state: StateAuth, { token }) => ({ ...state, token });
const logOutUser: ActionHandler = (state: StateAuth) => ({ ...state, email: '', password: '', token: '', authSuccess: false });

const handlers = {
  [TYPES.SIGN_UP_USER]: signUpUser,
  [TYPES.SIGN_IN_USER]: signInUser,
  [TYPES.SUCCESS_AUTHORIZATION_USER]: successAuthorizationUser,
  [TYPES.SEND_TOKEN_TO_REFRESH]: sendTokenToRefresh,
  [TYPES.SUCCESS_REFRESH_TOKEN]: successRefreshToken,
  [TYPES.LOG_OUT_USER]: logOutUser
}

export const authReduced = createReducer(initState, handlers);