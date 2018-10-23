import { createReducer } from '../../utilities/utility';
import * as TYPES from './types';

type State = {
  message: string
}
const initState: State = {
  message: ''
}
type Payload = {
  message: string
}

type ActionHandlerMessageError<T> = (state: State, payload: T) => State;


const messageError: ActionHandlerMessageError<Payload> = (state: State, { message }) => ({ ...state, message });

const handlers = {
  [TYPES.MESSAGE_ERROR]: messageError
}

export const errorReducer = createReducer(initState, handlers);