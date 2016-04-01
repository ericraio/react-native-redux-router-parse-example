import types from '../constants/deviceActionTypes';

export function setPlatform(platform) {
  return {
    type: types.SET_PLATFORM,
    payload: platform
  };
}
