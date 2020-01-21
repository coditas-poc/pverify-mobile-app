import React from 'react';
import { View } from 'react-native';
import styles from './SignupScreenStyle';
import { Other } from 'Components/Button';

export const ButtomContent = ({skip, manual}) => {
    return (
        <View style={styles.buttomContent}>
            <View style={styles.skipContent}>
                <Other onPress={skip} label="Skip" buttonStyle={styles.signUpButton} />
            </View>
            <View style={styles.manualContent}>
                <Other onPress={manual} label="Enter Manually" buttonStyle={styles.signUpButton} />
            </View>
        </View>
    );
};
