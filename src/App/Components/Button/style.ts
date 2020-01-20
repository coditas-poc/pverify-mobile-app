import {StyleSheet} from 'react-native';
import Colors from 'App/Theme/Colors';
import {Fonts} from 'App/Theme';

export default StyleSheet.create({
  button: {
    padding: 10,
    position: 'relative',
    backgroundColor: Colors.primary,
    shadowOpacity: 0.15,
    shadowOffset: {height: 6, width: 0},
    elevation: 3,
  },
  buttonPrimaryText: {
    color: Colors.background,
    textAlign: 'center',
    ...Fonts.style.h4,
  },
  buttonPrimary: {
    marginTop: 20,
    borderRadius: 30.2,
    paddingVertical: 16,
    paddingHorizontal: 60.4,
  },
});
