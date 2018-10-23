type Actions = {
  type: string,
  payload: object
}

export function createReducer(initialState: object, handlers) {
  return (state = initialState, action: Actions) => {
    const handler = handlers[action.type];
    if (!handler) {
      return state;
    }
    return handler({ ...state }, { ...action.payload });
  };
}
