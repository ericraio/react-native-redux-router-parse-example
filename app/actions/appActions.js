import types from '../constants/appActionTypes';

export function setVersion(version) {
  return {
    type: types.SET_VERSION,
    payload: version
  };
}
