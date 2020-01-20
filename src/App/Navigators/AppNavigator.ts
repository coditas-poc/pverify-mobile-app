import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ExampleScreen from 'Containers/Example/ExampleScreen';
import SplashScreen from 'Containers/SplashScreen/SplashScreen';
import LoginScreen from 'App/Containers/Login/LoginScreen';

/**
 * The root screen contains the application's navigation.
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
