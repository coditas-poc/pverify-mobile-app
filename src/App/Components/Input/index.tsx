import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import { Colors, Helpers } from 'Theme';
import { InputContainer } from '../InputContainer';
interface Props {
    placeholder: string;
    editable: boolean;
    children?: React.ReactNode;
    inputStyle?: Object;
    showError?: boolean;
    onTextChange?: any;
    field: {
        name: string;
        onBlur: any;
        onChange: any;
        onFocus: any;
        value: any;
    };
    form: {
        values: any;
        errors: any;
        touched: any;
        setFieldValue: any;
    };
    secureTextEntry: any;
}

const Input = (props: Props) => {
    const { editable, placeholder, field: { name, onBlur, value },
        form: { setFieldValue, errors, touched }, children, secureTextEntry, showError } = props;
    const color = editable ? Colors.text : Colors.textPrimary;
    const borderColor = errors[name] && touched[name] ? Colors.error : Colors.text;
    const inputStyle = [styles.input, { color }];
    const inputCointainerStyle = [styles.inputCointainer, { borderBottomColor: borderColor }, props.inputStyle];
    return (
        <View style={Helpers.mainStart}>
            <View style={inputCointainerStyle}>
                <View style={Helpers.rowMainAlign}>
                    <TextInput
                        editable={editable}
                        style={inputStyle}
                        value={value}
                        placeholder={placeholder}
                        onChangeText={(value) => setFieldValue(name, value)}
                        onBlur={(value) => onBlur(value)}
                        secureTextEntry={secureTextEntry}
                    />
                    {children}
                </View>
            </View>
            {showError &&
                <ErrorMessage name={name} component={FormError} />
            }
        </View>
    );
};

export const InputPasswordWithForgot = (props: Props) => {
    return (
        <Input {...props}>
            <Text style={styles.inputPasswordWithForgot}>Forget ?</Text>
        </Input>
    );
};

export const OtpInput = (props: Props) => {
    const { editable, placeholder, field: { name, onBlur, value },
        form: { setFieldValue, errors, touched }, children, secureTextEntry, onTextChange } = props;
    const color = editable ? Colors.text : Colors.textPrimary;
    const borderColor = errors[name] && touched[name] ? Colors.error : Colors.text;
    const inputStyle = [styles.otpInput, { color }];
    const inputCointainerStyle = [styles.OtpInputCointainer, { borderBottomColor: borderColor }];
    return (
        <View style={inputCointainerStyle}>
            <TextInput
                keyboardType="phone-pad"
                maxLength={1}
                editable={editable}
                style={inputStyle}
                value={value}
                placeholder={placeholder}
                onChangeText={(value) => {
                    props.onTextChange(value)
                    // setFieldValue(name, value);
                }}
                onBlur={(value) => onBlur(value)}
                secureTextEntry={secureTextEntry}
            />
        </View >
    );
};
export const InputWithBorder = (props: Props) => {
    const { placeholder, field: { name } } = props;
    return (
        <InputContainer placeholder={placeholder} name={name}>
            <Input {...props} showError={false} inputStyle={styles.inputWithContainer} />
        </InputContainer>
    );
};

Input.defaultProps = {
    disabled: false,
    showError: true,
};

export default Input;
