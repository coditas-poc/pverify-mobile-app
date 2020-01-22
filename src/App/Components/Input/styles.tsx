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
    width: Metrics.screenWidth - 64,
  },
  inputPasswordWithForgot: {
    position: 'absolute',
    right: 0,
    top: 8,
    color: Colors.text,
    fontFamily: Fonts.type.base,
    fontSize: normalize(14),
  },
  borderContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777777'
  },
  containerPlaceHolder: {
    position: 'absolute',
    top: -12,
    left: 12,
    color: '#777777',
    paddingHorizontal: 6,
    backgroundColor: 'white'
  },
});
export default styles;
