import { MESSAGE_ERROR, CLEAR_MESSAGE } from './types';

export type messageErrorAction = { type: typeof MESSAGE_ERROR, payload: { message: string, statusCode: number } };
export type clearMessageAction = { type: typeof CLEAR_MESSAGE };

export const messageError = (message: string, statusCode: number): messageErrorAction => ({
  type: MESSAGE_ERROR,
  payload: { message, statusCode }
});
export const clearMessage = (): clearMessageAction => ({
  type: CLEAR_MESSAGE
});