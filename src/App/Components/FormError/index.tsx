import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
interface Props {
  children: any;
  style?: any;
}
export default function FormError({ children, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}
