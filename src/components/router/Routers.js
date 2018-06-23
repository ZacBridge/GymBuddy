import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from '../auth/Login';
import AuthLoadingScreen from '../auth/loadingScreen';

export const AuthStack = createStackNavigator({
  Login: { screen: Login },
});

export const Router = createSwitchNavigator({
  AuthLoading: { screen: AuthLoadingScreen },
  Auth: { screen: AuthStack },
},
{
  initialRouteName: 'AuthLoading',
});
