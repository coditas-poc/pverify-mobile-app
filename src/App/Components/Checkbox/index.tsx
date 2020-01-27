import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
    isChecked: boolean;
    onPress: any;
    text: string;
};
export const CheckBoxWithText = (props: Props) => {
    const { isChecked, onPress, text } = props;
    return (
        <View style={styles.checkBoxContainer}>
            <Button onPress={onPress}>
                <Icon name={isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} size={24} style={{ marginTop: 8 }} />
            </Button>
            <Text style={styles.termsText}>{text}</Text>
        </View>
    );
};
