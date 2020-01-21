import {StyleSheet} from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import {Metrics, Fonts, Colors} from 'Theme';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  logoContainer: {
    marginTop: '30%',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain' as 'contain',
  },
  loginCointainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    marginBottom: 50,
  },
  loginSignupWrapper: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 150,
  },
  fbGoogleWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  continueCointainer: {
    marginVertical: 10,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth - 64,
  },
  continueLine: {
    height: 1,
    backgroundColor: Colors.text,
    width: Metrics.screenWidth - 320,
    margin: 2,
  },
  containuetext: {
    color: Colors.text,
    fontSize: 20,
    fontFamily: Fonts.type.base,
  },
  signUpButton: {
    borderColor: Colors.background,
    shadowOpacity: 0,
    shadowOffset: { height: 0, width: 0 },
    elevation: 0,
}
});
