import * as React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './Buttons.scss';
import btnColors from './_ButtonColors.scss';
import { titleCase } from 'App/Utils/titleCase';

const colors = ['green', 'pink', 'dark', 'orange', 'red', 'black'];
const stylesIndexSignature: { [index: string]: string } = styles;
const btnColorssIndexSignature: { [index: string]: string } = btnColors;

const Button = (color: string, index: number) => {
  const button = 'button' + titleCase(color);
  const icon = 'icon' + titleCase(color);
  return (
    <View className={styles.buttonWrapper} key={index}>
      <TouchableHighlight className={stylesIndexSignature[button]}>
        <View className={styles.innerWrapper}>
          <View className={stylesIndexSignature[icon]}>
            <Text className={styles.iconText}>
            </Text>
          </View>
          <Text className={styles.buttonText}>Button</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const Color = (color: string, index: number) => {
  return (
    <View
      className={styles.color}
      style={{ backgroundColor: btnColorssIndexSignature[color] }}
      key={index}
    />
  );
};

export const Buttons = () => {
  return (
    <React.Fragment>
      <View className={styles.wrapper}>{colors.map(Button)}</View>
      {/* <View className={styles.wrapper}>{colors.map(Color)}</View> */}
    </React.Fragment>
  );
};
