import React, { AppRegistry, Component, } from 'react-native';

import App from './App';
import configureStore from './lib/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default function native(platform) {
  class Example extends Component {
    render() {
      return (
        <Provider store={store}>
          <App platform={platform} store={store} />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('Example', () => Example);
}
