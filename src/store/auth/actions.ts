import {
  SIGN_UP_USER, SIGN_IN_USER, SUCCESS_AUTHORIZATION_USER,
  SEND_TOKEN_TO_REFRESH, SUCCESS_REFRESH_TOKEN, LOG_OUT_USER
} from './types';

export type signUpUserAction = { type: typeof SIGN_UP_USER, payload: { email: string, password: string } };
export type signInUserAction = { type: typeof SIGN_IN_USER, payload: { email: string, password: string } };
export type successAuthorizationUserAction = { type: typeof SUCCESS_AUTHORIZATION_USER, payload: { token: string } };
export type sendTokenToRefreshAction = { type: typeof SEND_TOKEN_TO_REFRESH };
export type successRefreshTokenAction = { type: typeof SUCCESS_REFRESH_TOKEN, payload: { token: string } };
export type logOutUserAction = { type: typeof LOG_OUT_USER };



export const signUpUser = (email: string, password: string): signUpUserAction => ({
  type: SIGN_UP_USER,
  payload: { email, password }
});
export const signInUser = (email: string, password: string): signInUserAction => ({
  type: SIGN_IN_USER,
  payload: { email, password }
});
export const successAuthorizationUser = (token: string): successAuthorizationUserAction => ({
  type: SUCCESS_AUTHORIZATION_USER,
  payload: { token }
});
export const sendTokenToRefresh = (): sendTokenToRefreshAction => ({
  type: SEND_TOKEN_TO_REFRESH
});
export const successRefreshToken = (token: string): successRefreshTokenAction => ({
  type: SUCCESS_REFRESH_TOKEN,
  payload: { token }
});
export const logOutUser = (): logOutUserAction => ({
  type: LOG_OUT_USER
});
