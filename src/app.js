import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    console.log("test");
    firebase.initializeApp({
    apiKey: 'AIzaSyDke9W8Up2Lk32096hXPbffHueb8HDTyRc',
    authDomain: 'auth-b8791.firebaseapp.com',
    databaseURL: 'https://auth-b8791.firebaseio.com',
    projectId: 'auth-b8791',
    storageBucket: 'auth-b8791.appspot.com',
    messagingSenderId: '58074543238'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonStyle}>
           <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        )
      case false:
        return (
          <View style={styles.loginStyle}>
            <LoginForm  />
          </View>
        )
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        )
    }

  }


  render() {
    return (
      <View style={styles.appStyle}>
        <Header headerText="Gym Buddy" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  appStyle: {
    backgroundColor: '#2e7d32',
    paddingBottom: 0,
    margin: 0,
    height: '100%',
  },
  buttonStyle: {
    // borderBottomWidth: 1,
    padding: 5,
    // backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  spinnerStyle: {
    paddingTop: 20
  },
  loginStyle: {
    width: '100%',
    height: '90%',
    padding: 0,
    marginBottom: 0,
    alignItems: 'center',
  }
}


export default App;
