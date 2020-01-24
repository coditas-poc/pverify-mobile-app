import {StyleSheet} from 'react-native';
import Colors from 'App/Theme/Colors';
import {Fonts} from 'App/Theme';
import {normalize} from '../../Theme/Metrics';

export default StyleSheet.create({
  cardCointainer: {
    backgroundColor: Colors.primary,
    height: normalize(374),
    width: normalize(272),
    borderRadius: normalize(8),
    marginTop: normalize(32),
    alignItems: 'center',
    padding: normalize(16),
  },
  cardHeaderText: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(20),
    color: Colors.background,
    textAlign: 'center',
  },
  cardcontentText: {
    marginTop: normalize(16),
    fontFamily: Fonts.type.medium,
    fontSize: normalize(14),
    color: Colors.background,
    textAlign: 'center',
  },
  cardCameracontent: {
    backgroundColor: Colors.background,
    height: normalize(177),
    width: normalize(240),
    borderRadius: normalize(8),
    marginVertical: normalize(10),
    overflow: 'hidden',
  },
  cardbottomtext: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(14),
    color: Colors.background,
    textAlign: 'center',
  },
});
