import {StyleSheet} from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import {Metrics, Fonts, Colors} from 'Theme';
import { normalize } from '../../Theme/Metrics';
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  signupCointainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - 56,
  },
  signUpButton: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
    borderColor: Colors.background,
    shadowOpacity: 0,
    shadowOffset: {height: 0, width: 0},
    elevation: 0,
  },

  buttomContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(39),
    bottom: normalize(41),
    position: 'absolute',
    width: normalize(272),
  },
  skipContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  manualContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
