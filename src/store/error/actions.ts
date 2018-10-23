import { MESSAGE_ERROR } from './types';

type messageErrorAction = { type: typeof MESSAGE_ERROR, payload: { message: string } };

export const messageError = (message: string): messageErrorAction => ({
  type: MESSAGE_ERROR,
  payload: { message }
});