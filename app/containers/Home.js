import React, { Component, View, Text, StyleSheet} from 'react-native';
import connect from '../utils/connect';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome} onPress={() => this.props.actions.push('feed') }>
          Go to Next Page
        </Text>
      </View>
    );
  }
}

export default connect(Home);
