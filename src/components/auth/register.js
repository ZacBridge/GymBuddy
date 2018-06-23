import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Item,
  Input,
} from 'native-base';
import { bindActionCreators } from 'redux';
import authStyles from './authStyles';
import * as classActions from './authActions';

class Register extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  render() {
    const {
      background,
      blockButtonStyle,
      inputStyle,
    } = authStyles;
    return (
      <View style={background}>
        <Item rounded style={inputStyle}>
          <Input placeholder="Full Name" />
        </Item>
        <Item rounded style={inputStyle}>
          <Input placeholder="Email" />
        </Item>
        <Item rounded style={inputStyle}>
          <Input placeholder="Password" />
        </Item>
        <Button block style={blockButtonStyle}>
          <Text style={{ color: 'white' }}>
            Register
          </Text>
        </Button>
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
)(Register);
