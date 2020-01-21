import {StyleSheet} from 'react-native';
import Colors from 'App/Theme/Colors';
import {Fonts} from 'App/Theme';
import { normalize } from '../../Theme/Metrics';

export default StyleSheet.create({
  button: {
    padding: 10,
    position: 'relative',
    shadowOpacity: 0.15,
    shadowOffset: {height: 6, width: 0},
    elevation: 3,
  },
  buttonPrimaryText: {
    color: Colors.background,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: normalize(14),
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: '3%',
    paddingHorizontal: '10%',
  },
  buttonOtherText: {
    color: Colors.primary,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: normalize(14),
  },
  buttonOther: {
    backgroundColor: Colors.background,
    borderRadius: 30,
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    borderColor: Colors.primary,
    marginHorizontal: '1%',
    borderWidth: 1.5,
  },
});
