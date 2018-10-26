import { MESSAGE_ERROR } from './types';

export type messageErrorAction = { type: typeof MESSAGE_ERROR, payload: { message: string, statusCode: number } };

export const messageError = (message: string, statusCode: number): messageErrorAction => ({
  type: MESSAGE_ERROR,
  payload: { message, statusCode }
});