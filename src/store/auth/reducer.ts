import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

type State = {
  email: string,
  password: string,
  token: string,
  authSuccess: boolean
}
const initState: State = {
  email: '',
  password: '',
  token: '',
  authSuccess: false
}

type loginPayload = {
  email: string,
  password: string
}
type tokenPayload = {
  token: string
}
type ActionHandlerLoginUser<T> = (state: State, payload: T) => State;
type ActionHandlerToken<T> = (state: State, payload: T) => State;
type ActionHandler = (state: State) => State;

const signUpUser: ActionHandlerLoginUser<loginPayload> = (state: State, { email, password }) => ({ ...state, email, password });
const signInUser: ActionHandlerLoginUser<loginPayload> = (state: State, { email, password }) => ({ ...state, email, password });
const successAuthorizationUser: ActionHandlerToken<tokenPayload> = (state: State, { token }) => ({ ...state, token, authSuccess: true });
const sendTokenToRefresh: ActionHandler = (state: State) => ({ ...state });
const successRefreshToken: ActionHandlerToken<tokenPayload> = (state: State, { token }) => ({ ...state, token });
const logOutUser: ActionHandler = (state: State) => ({ ...state, email: '', password: '', token: '', authSuccess: false });

const handlers = {
  [TYPES.SIGN_UP_USER]: signUpUser,
  [TYPES.SIGN_IN_USER]: signInUser,
  [TYPES.SUCCESS_AUTHORIZATION_USER]: successAuthorizationUser,
  [TYPES.SEND_TOKEN_TO_REFRESH]: sendTokenToRefresh,
  [TYPES.SUCCESS_REFRESH_TOKEN]: successRefreshToken,
  [TYPES.LOG_OUT_USER]: logOutUser
}

export const authReduced = createReducer(initState, handlers);