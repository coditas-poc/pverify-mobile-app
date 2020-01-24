import {StyleSheet} from 'react-native';
import Metrics, {normalize} from '../../Theme/Metrics';
import { Fonts } from 'App/Theme';
import { Colors } from 'Theme';

export default StyleSheet.create({
  buttonContainer: {
    width: normalize(48),
    height: normalize(48),
    marginLeft: Metrics.normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageButton: {
    resizeMode: 'contain',
  },
  textButton: {
    fontFamily: Fonts.type.base,
    fontSize: normalize(14),
    marginRight: normalize(16),
    color: Colors.background
}
});
