import { StyleSheet } from 'react-native';
import { Colors } from 'Theme';
import Fonts from 'App/Theme/Fonts';
const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    fontSize: 23,
    margin: 4,
    color: Colors.text,
    fontFamily: Fonts.type.base,
  },
});
export default styles;
