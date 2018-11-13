import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

export type StateError = {
  message: string,
  statusCode: number
}
type Payload = {
  message: string,
  statusCode: number
}
type ActionHandlerMessageError<T> = (state: StateError, payload: T) => StateError;
type ActionHandlerMessageClear = (state: StateError) => StateError;

const initState: StateError = {
  message: '',
  statusCode: 0
}

const messageError: ActionHandlerMessageError<Payload> = (state: StateError, { message, statusCode }) => ({ ...state, message, statusCode });
const clearMessage: ActionHandlerMessageClear = (state: StateError) => ({ ...state, message: '', statusCode: 0 });

const handlers = {
  [TYPES.MESSAGE_ERROR]: messageError,
  [TYPES.CLEAR_MESSAGE]: clearMessage
}

export const errorReducer = createReducer(initState, handlers);