import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

type State = {
  message: string,
  statusCode: number
}
type Payload = {
  message: string,
  statusCode: number
}
type ActionHandlerMessageError<T> = (state: State, payload: T) => State;

const initState: State = {
  message: '',
  statusCode: 0
}

const messageError: ActionHandlerMessageError<Payload> = (state: State, { message, statusCode }) => ({ ...state, message, statusCode });

const handlers = {
  [TYPES.MESSAGE_ERROR]: messageError
}

export const errorReducer = createReducer(initState, handlers);