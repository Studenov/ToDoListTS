import {
  put, takeEvery, call,
  CallEffect, PutEffect
} from 'redux-saga/effects';

import { SIGN_UP_USER, SIGN_IN_USER } from './types';
import { messageError } from '../error/actions';
import { successAuthorizationUser } from './actions';
import { setUserToken } from '../../utilities/APIConfig';
import { authorizationUser } from './helpers/auth';


type Effect = PutEffect<any> | CallEffect;
type AuthUser = {
  payload: {
    email: string,
    password: string
  },
  type: string
}

function* loginUser({ payload, type }: AuthUser): IterableIterator<Effect> {
  const { email, password } = payload;
  let newUser = false;
  if (type === 'SIGN_UP_USER') newUser = true;
  try {
    const token = yield call(authorizationUser, email, password, newUser);
    setUserToken(token);
    yield put(successAuthorizationUser(token));
  } catch (e) {
    console.log('<-- Start console dir -->');
    console.dir(e);
    console.log('<-- End console dir -->');
    yield put(messageError(e));
  }
}

export function* sagasAuthUser() {
  yield takeEvery([SIGN_UP_USER, SIGN_IN_USER], loginUser);
}