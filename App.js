import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';
import { Router } from './src/components/router/Routers';
import reducers from './src/components/router/Reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Provider store={store}>
          <Router />
        </Provider>
      </Root>
    );
  }
}

export default App;
