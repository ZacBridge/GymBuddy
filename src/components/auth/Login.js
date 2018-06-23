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

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const {
      background,
      blockButtonStyle,
      textButtonStyle,
      titleStyle,
      inputStyle,
    } = authStyles;
    return (
      <View
        style={[background, { paddingTop: '10%' }]}
      >
        <Text style={titleStyle}>
          GYM BUDDY
        </Text>
        <View style={background}>
          <Item rounded style={inputStyle}>
            <Input placeholder="Email" />
          </Item>
          <Item rounded style={inputStyle}>
            <Input placeholder="Password" />
          </Item>
          <Button block style={blockButtonStyle}>
            <Text style={{ color: 'white' }}>
              Login
            </Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Register')}
            hasText
            transparent
            style={{ alignSelf: 'center' }}
          >
            <Text style={textButtonStyle}>
              Sign Up for Gym Buddy?
            </Text>
          </Button>
        </View>
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
