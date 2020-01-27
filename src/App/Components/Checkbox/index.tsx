import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
    field: {
        name: string;
        value: boolean;
    };
    form: {
        setFieldValue: any;
    };
    onPress?: any;
    text: string;
};

export const CheckBoxWithText = (props: Props) => {
    const { field: { name, value }, text, onPress, form: { setFieldValue } } = props;
    const formikOnPress = () => {
        setFieldValue(name, !value);
    };
    return (
        <View style={styles.checkBoxContainer}>
            <Button onPress={onPress ? onPress : formikOnPress}>
                <Icon
                    name={value ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                    size={24}
                />
            </Button>
            <Text style={styles.termsText}>{text}</Text>
        </View>
    );
};
