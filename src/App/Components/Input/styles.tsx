import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'Theme';
import Fonts from 'App/Theme/Fonts';
import { normalize } from '../../Theme/Metrics';
const styles = StyleSheet.create({
  input: {
    position: 'relative',
    paddingVertical: 8,
    fontSize: normalize(14),
    marginLeft: 0,
    margin: 4,
    color: Colors.text,
    fontFamily: Fonts.type.base,
    width: '100%',
  },
  inputCointainer: {
    borderBottomWidth: 1,
    width: normalize(256),
  },
  inputPasswordWithForgot: {
    position: 'absolute',
    right: 0,
    top: 8,
    color: Colors.text,
    fontFamily: Fonts.type.base,
    fontSize: normalize(14),
  },
  otpInput: {
    position: 'relative',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: normalize(20),
    color: Colors.text,
    fontFamily: Fonts.type.base,
    width: '100%',
  },
  OtpInputCointainer: {
    borderColor: '#BBBBBB',
    borderWidth: normalize(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(8),
    width: normalize(49),
    height: normalize(49),
    marginHorizontal: normalize(11.5),
  },
  inputWithContainer: {
    borderBottomWidth: 0,
    marginStart: 12,
  },
});
export default styles;
