import * as types from '../constants/deviceActionTypes';
import { Record, List } from 'immutable';
import Parse from 'parse';

const InitialState = Record({
  state: null,
  platform: null,
});

export default function deviceReducer(state = new InitialState, action) {

  switch(action.type) {
    case types.SET_PLATFORM:
      state = state.set('state', action.type);
      break;
  }

  switch (action.type) {
    case types.SET_PLATFORM:
      return state.set('platform', action.payload);

  default:
    return state;
  }

}
