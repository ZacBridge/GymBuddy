import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  // Initialize state
  state = { email: '', password :'', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''

    });
  }


  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        LOGIN
      </Button>
    )
  }

  render() {
    return (
      <View style={styles.overallStyle}>

      <Text style={styles.pageHeaderStyle}>Please Log in!</Text>

        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder='Password'
              // label='Password'
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </Card>

            <CardSection style={styles.buttonStyle}>
              {this.renderButton()}
              </CardSection>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
    overallStyle: {
      // backgroundColor: 'blue',
      borderRadius: 5,
      paddingTop: 50,
      paddingBottom: 50,
      margin: 5,
      width: '80%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    pageHeaderStyle: {
      color: '#fff',
      alignSelf: 'center',
      // flexDirection: 'row',
      // justifyContent: 'center',
    }

}

export default LoginForm;
