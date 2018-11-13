import {
  put, takeEvery, call,
  CallEffect, PutEffect
} from 'redux-saga/effects';
import { push, RouterAction } from 'connected-react-router';

import { SIGN_UP_USER, SIGN_IN_USER } from './types';
import { messageError, messageErrorAction } from '../error/actions';
import { successAuthorizationUser, successAuthorizationUserAction } from './actions';
import { setUserToken } from '../../utilities/APIConfig';
import { authorizationUser } from './helpers/auth';

type EffectAuth = PutEffect<successAuthorizationUserAction | messageErrorAction | RouterAction> | CallEffect;
type AuthUser = {
  payload: {
    email: string,
    password: string
  },
  type: string
}

function* loginUser({ payload, type }: AuthUser): IterableIterator<EffectAuth> {
  const { email, password } = payload;
  let newUser = false;
  if (type === 'SIGN_UP_USER') newUser = true;
  try {
    const token = yield call(authorizationUser, email, password, newUser);
    setUserToken(token);
    yield put(successAuthorizationUser(token));
    yield put(push('/dashboard'));
  } catch (e) {
    const { message, statusCode } = e.response.data;
    yield put(messageError(message, statusCode));
  }
}

export function* sagasAuthUser() {
  yield takeEvery([SIGN_UP_USER, SIGN_IN_USER], loginUser);
}