import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import { Colors, Helpers } from 'Theme';

interface Props {
    placeholder: string;
    editable: boolean;
    children?: React.ReactNode;
    inputStyle?: Object;
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
        form: { setFieldValue, errors, touched }, children, secureTextEntry } = props;
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
            <ErrorMessage name={name} component={FormError} />
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



export const ConfirmContainer = (props: Props) => {
    const { placeholder, field: { name }, children } = props;
    return (
        <View style={styles.borderContainer} >
            <Text style={styles.containerPlaceHolder}>
                {placeholder}
            </Text>
            {children}
            <ErrorMessage name={name} component={FormError} />
        </View >
    )
}

export const InputWithBorder = (props: Props) => {
    const { placeholder, field: { name }, children } = props;
    return (
        <ConfirmContainer {...props}>
            <Input {...props} inputStyle={{ borderBottomWidth: 0 }} />
        </ConfirmContainer>
    );
}

Input.defaultProps = {
    disabled: false,
};

export default Input;