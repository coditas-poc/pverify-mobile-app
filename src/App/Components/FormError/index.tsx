import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function FormError({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}
