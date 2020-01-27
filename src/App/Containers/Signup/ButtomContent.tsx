import React from 'react';
import { View } from 'react-native';
import styles from './SignupScreenStyle';
import { Other } from 'Components/Button';
import { normalize } from '../../Theme/Metrics';

type ButtonContentProps = {
    capture: any;
    manual: any;
};
export const ButtomContent = ({ capture, manual }: ButtonContentProps) => {
    return (
        <View style={styles.buttomContent}>
            <Other onPress={capture} label="Capture" />
            <View style={{ marginTop: normalize(16) }}>
                <Other onPress={manual} label="Enter Manually" buttonStyle={styles.signUpButton} />
            </View>
        </View>
    );
};
