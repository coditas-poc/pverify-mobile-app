import React from 'react'
import { View, Text } from 'react-native'
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import styles from './styles';
interface Props {
    placeholder: string;
    children?: React.ReactNode;
    name: string;
}
export const ConfirmContainer = (props: Props) => {
    const { placeholder, name, children } = props;
    return (
        <View style={styles.borderContainer} >
            <Text style={styles.containerPlaceHolder}>
                {placeholder}
            </Text>
            {children}
            <ErrorMessage name={name} component={FormError} />
        </View >
    );
};
