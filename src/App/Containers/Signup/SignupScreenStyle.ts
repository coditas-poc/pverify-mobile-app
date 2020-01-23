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
    marginBottom: 50,
  },
  signUpButton: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderColor: Colors.background,
    shadowOpacity: 0,
    shadowOffset: { height: 0, width: 0 },
    elevation: 0,
  },

  buttomContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(39),
    bottom: -28,
    position: 'absolute',
    marginRight: normalize(26),
    marginLeft: normalize(26),
  },
  skipContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  manualContent: {
    flex: 1,
    alignItems: 'flex-end',
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
    marginVertical: 20,
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
