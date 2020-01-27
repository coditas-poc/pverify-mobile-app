import { StyleSheet } from 'react-native';
import ApplicationStyles from 'App/Theme/ApplicationStyles';
import { Metrics, Fonts, Colors } from 'Theme';
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
    // height: Metrics.screenHeight - 56,
  },
  signUpButton: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
    borderColor: Colors.background,
    shadowOpacity: 0,
    shadowOffset: { height: 0, width: 0 },
    elevation: 0,
  },

  buttomContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: normalize(16),
    paddingHorizontal: normalize(10),
    position: 'relative',
  },
  finalRegisterScreenHeaderText: {
    fontSize: normalize(20),
    lineHeight: normalize(30),
    marginTop: 12,
    marginStart: 24,
    fontFamily: Fonts.type.medium,
    color: Colors.primary,
  },
  checkBoxParentContainer: {
    width: '90%',
    maxWidth: Metrics.screenWidth,
  },
  checkBoxContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    width: '95%',
  },
  termsText: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    marginStart: 12,
    fontFamily: Fonts.type.base,
  },
});
