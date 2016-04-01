'use strict';

import React, { Component } from 'react-native';
import connectProps from './connectProps';
import types from '../constants/routerActionTypes';

export default function connectApp(ConnectedComponent) {
  ConnectedComponent = connectProps(ConnectedComponent);

  class Connection extends Component {

    componentWillReceiveProps(props) {
      let routerState = props.router.get('state');
      if(!routerState || routerState === types.ROUTER_COMPLETE) { return; }
      switch (routerState) {
        case types.ROUTER_POP:
          this.props.toBack();
          break;
        case types.ROUTER_PUSH:
          this.props.toRoute(props.router.get('route'));
          break;
        case types.ROUTER_RESET:
          this.props.resetToRoute(props.router.get('route'));
          break;
      }

      this.props.actions.routerComplete();
    }

    render() {
      return (
        <ConnectedComponent {...this.props} {...this.state} />
      );
    }
  };

  return connectProps(Connection);
}
