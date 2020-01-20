import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import { Colors, Metrics } from 'Theme';

interface Props {
    placeholder: string;
    editable: boolean;
    field: {
        name: string;
        onBlur: any;
        onChange: any;
        onFocus: any;
        value: any;
    };
    form: {
        errors: any;
        touched: any;
    };
}

const Input = (props: Props) => {
    const { editable, placeholder, field: { name, onBlur, onChange, value }, form: { errors, touched } } = props;
    // console.log('props', props);
    const color = editable ? 'gray' : 'black';
    const borderColor = errors[name] && touched[name] ? Colors.error : Colors.text;
    const inputStyle = [styles.input, { color, borderColor }];
    return (
        <View style={{borderBottomColor: Colors.text, borderBottomWidth: 1, width: Metrics.screenWidth - 64}}>
            <TextInput
                editable={editable}
                style={inputStyle}
                value={value}
                placeholder={placeholder}
                onChangeText={(value) => onChange(value)}
                onBlur={(value) => onBlur(value)}
            />
            <ErrorMessage name={name} component={FormError} />
        </View>
    );
};

Input.defaultProps = {
    disabled: false,
};

export default Input;
