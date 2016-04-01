'use strict';

import * as containers from '../containers';
import React, { Navigator, Platform } from 'react-native';
import types from '../constants/routerActionTypes';

function getContainer(route) {
  route = route.charAt(0).toUpperCase() + route.slice(1);
  return containers[route]
}

export function push(route, options = {}) {
  let container = getContainer(route);
  let sceneConfig = Navigator.SceneConfigs.FloatFromRight;
  if (Platform.OS === 'android') {
    sceneConfig.gestures = {};
  }

  return {
    type: types.ROUTER_PUSH,
    payload: {
      route: Object.assign({}, {
        sceneConfig: sceneConfig,
        title: route.toUpperCase(),
        component: container
      }, options)
    }
  };
}

export function reset(route, options) {
  let container = getContainer(route);
  return {
    type: types.ROUTER_RESET,
    payload: {
      route: Object.assign({}, {
        title: route.toUpperCase(),
        component: container
      }, options)
    }
  };
}

export function pop() {
  return {
    type: types.ROUTER_POP,
  };
}

export function routerComplete() {
  return {
    type: types.ROUTER_COMPLETE,
  };
}
