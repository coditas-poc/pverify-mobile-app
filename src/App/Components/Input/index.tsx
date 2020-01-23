import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ErrorMessage } from 'formik';
import FormError from '../FormError';
import { Colors, Helpers } from 'Theme';
import { ConfirmContainer } from '../InputContainer';
import DateTimePicker from '@react-native-community/datetimepicker';
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

export const InputWithBorder = (props: Props) => {
    const { placeholder, field: { name } } = props;
    return (
        <ConfirmContainer placeholder={placeholder} name={name}>
            <Input {...props} inputStyle={styles.inputWithContainer} />
        </ConfirmContainer>
    );
};

export const InputWithDatePicker = (props: Props) => {
    const { placeholder, field: { name, value }, form: { setFieldValue } } = props;
    const [isPickerVisible, setPickerVisibility] = useState(false);
    let newField = { ...props.field };
    if (value) {
        newField = { ...newField, value: getDateFromString(new Date(value)) };
    }
    return (
        <ConfirmContainer placeholder={placeholder} name={name}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => setPickerVisibility(true)}>
                <Input {...props} field={newField} editable={false} inputStyle={styles.inputWithContainer} />
            </TouchableOpacity>
            {isPickerVisible &&
                <DateTimePicker
                    onChange={(event, date) => {
                        setPickerVisibility(false);
                        setFieldValue(name, date?.toISOString());
                    }}
                    value={value ? new Date(value) : new Date()} />
            }
        </ConfirmContainer>
    );
};

const getDateFromString = (date: Date) => {
    let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

Input.defaultProps = {
    disabled: false,
};

export default Input;
