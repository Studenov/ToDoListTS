import { fork } from 'redux-saga/effects';

import { sagasAuthUser as auth } from './auth/sagas';


export function* rootSagas() {
  yield fork(auth);
}
