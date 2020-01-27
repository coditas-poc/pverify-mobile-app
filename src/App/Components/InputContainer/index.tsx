import React from 'react';
import { View, Text } from 'react-native';
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import styles from './styles';
interface Props {
    placeholder: string;
    children?: React.ReactNode;
    name: string;
}
export const InputContainer = (props: Props) => {
    const { placeholder, name, children } = props;
    return (
        <View style={styles.externalContainer}>
            <View style={styles.borderContainer} >
                <Text style={styles.containerPlaceHolder}>
                    {placeholder}
                </Text>
                {children}
            </View>
            <View style={{ marginTop: 4, marginStart: 8 }}>
                <ErrorMessage name={name} component={FormError} />
            </View>
        </View>
    );
};
