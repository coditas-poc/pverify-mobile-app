import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ExampleScreen from 'Containers/Example/ExampleScreen';
import SplashScreen from 'Containers/SplashScreen/SplashScreen';
import LoginScreen from 'App/Containers/Login/LoginScreen';
import SignupScreen from 'App/Containers/Signup/SignupScreen';
import { Colors } from 'Theme';
// import CameraScreen from '../Containers/Cameras/CameraScreen';

/**
 * The root screen contains the application's navigation.
 */
const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    Signupscreen: SignupScreen,
    MainScreen: ExampleScreen,
    // CameraScreen: CameraScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: Colors.background,
      headerBackTitleStyle: {
        color: Colors.background,
      },
    },
  },
);

export default createAppContainer(StackNavigator);
