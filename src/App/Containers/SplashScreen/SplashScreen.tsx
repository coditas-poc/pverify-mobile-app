import React from 'react';
import { View, Image } from 'react-native';
import styles from './SplashScreenStyle';
import { Images } from 'Theme';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
        </View>
      </View>
    );
  }
}
