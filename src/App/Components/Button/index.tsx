import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
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
  const { label, onPress, buttonStyle, textColor, children } = props;
  const buttonStyles = [styles.button, buttonStyle];
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} activeOpacity={0.7}>
      {children
        ? children
        : <Text style={textColor}>{label}</Text>
      }
    </TouchableOpacity>
  );
};
export const Primary = (props: any) => {
  return (<Button  {...props} buttonStyle={styles.buttonPrimary} textColor={styles.buttonPrimaryText} />);
};

export const Other = (props: any) => {
  const buttonStyle = { ...styles.buttonOther, ...props.buttonStyle };
  return (<Button  {...props} buttonStyle={buttonStyle} textColor={styles.buttonOtherText} />);
};

Button.defaultProps = {
  label: 'Press Me',
  onPress: () => { },
  disabled: false,
};

export default Button;
