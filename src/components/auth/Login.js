import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from './authActions';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>
            Login Page
        </Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    state: state.auth,
  }),
  dispatch => ({
    actions: bindActionCreators(classActions, dispatch),
  }),
)(Login);
