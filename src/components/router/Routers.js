import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { HEADERCOLOR, CRIMSONCOLOR } from '../../config/colors';
import Login from '../auth/login';
import Register from '../auth/register';
import AuthLoadingScreen from '../auth/loadingScreen';


export const AuthStack = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: HEADERCOLOR,
      borderBottomColor: HEADERCOLOR,
    },
    headerTintColor: CRIMSONCOLOR,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export const Router = createSwitchNavigator({
  AuthLoading: { screen: AuthLoadingScreen },
  Auth: { screen: AuthStack },
},
{
  initialRouteName: 'AuthLoading',
});
