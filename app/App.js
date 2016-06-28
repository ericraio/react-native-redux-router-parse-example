import React, { Component, AsyncStorage, StyleSheet, View, Text } from 'react-native';
import Parse from 'parse/react-native';
import { setPlatform } from './actions/deviceActions';
import { setVersion } from './actions/appActions';
import AppConfig from './constants/AppConfig';
import Router from 'react-native-simple-router';
import connectProps from './utils/connectProps';

Parse.initialize(AppConfig.ParseApplicationId, AppConfig.ParseJavaScriptKey);
Parse.serverURL = AppConfig.ParseServerURL;


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});

class App extends Component {

  componentDidMount() {
    this.props.actions.setPlatform(this.props.platform);
    this.props.actions.setVersion(AppConfig.VERSION);
  }

  render() {
    return (
      <Router
        firstRoute={this.props.router.get('route')}
        headerStyle={styles.header}
      />
    );
  }

}

export default connectProps(App);
