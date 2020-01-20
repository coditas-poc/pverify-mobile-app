import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'Theme';

export default StyleSheet.create({
  container: {
    width: '70%',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.error,
    fontWeight: '400',
    ...Fonts.style.normal,
  },
});
