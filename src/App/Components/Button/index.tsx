import * as React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import styles from './style';

type Props = {
  type?: string,
  theme?: string,
  size?: string,
  onPress: any,
  children?: React.ReactNode,
  disabled?: boolean,
  label?: string | undefined,
  buttonStyle?: object,
  textColor?: object,
};

const Button = (props: Props) => {
  const {label, onPress, buttonStyle, textColor, children, theme, size, disabled } = props; 
  const buttonStyles = [styles.button, buttonStyle];
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} activeOpacity={0.7}>
      <Text style={textColor}>{label}</Text>
    </TouchableOpacity>
  );
};
export const Primary = ({onPress, label}) => {
  return (<Button onPress={onPress} label={label} buttonStyle={styles.buttonPrimary} textColor={styles.buttonPrimaryText} />);
};

Button.defaultProps = {
  label: 'Press Me',
  onPress: () => { },
  disabled: false,
};

export default Button;
