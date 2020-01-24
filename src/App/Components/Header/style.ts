import {StyleSheet} from 'react-native';
import Metrics, {normalize} from '../../Theme/Metrics';

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
});
