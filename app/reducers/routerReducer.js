import types from '../constants/routerActionTypes';
import { Record, List } from 'immutable';
import Parse from 'parse/react-native';
import Home from '../containers/Home';

const InitialState = Record({
  state: null,
  route: {
    component: Home,
    name: 'HOME'
  },
  passProps: null,
});

export default function deviceReducer(state = new InitialState, action) {

  switch(action.type) {
    case types.ROUTER_PUSH:
    case types.ROUTER_RESET:
    case types.ROUTER_COMPLETE:
      state = state.set('state', action.type);
      break;
  }

  switch (action.type) {
    case types.ROUTER_PUSH:
    case types.ROUTER_RESET:
      return state.set('route', action.payload.route)
                  .set('passProps', action.payload.route.passProps);

  default:
    return state;
  }
}
