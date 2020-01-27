import {StyleSheet} from 'react-native';
import {Metrics, Colors} from 'Theme';
import ApplicationStyles from 'App/Theme/ApplicationStyles';
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  phoneVefifyCointainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - 56,
  },
});
