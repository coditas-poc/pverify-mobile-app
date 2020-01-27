import React, { useState } from 'react';
import { Picker } from 'react-native';
import { InputContainer } from '../InputContainer';
import { getDateFromString } from 'App/Utils/General';
import DateTimePicker from '@react-native-community/datetimepicker';
import Input from '../Input';
import styles from './styles';
import Button from '../Button';
interface PickerProps {
    name: string;
    id: string | number;
}
interface Props {
    placeholder: string;
    editable: boolean;
    children?: React.ReactNode;
    inputStyle?: Object;
    options?: PickerProps[];
    initialValues?: Object;
    field: {
        name: string;
        onBlur: any;
        onChange: any;
        onFocus: any;
        value: any;
    };
    form: {
        initialValues: any;
        values: any;
        errors: any;
        touched: any;
        setFieldValue: any;
    };
}
export const DropDownPicker = (props: Props) => {
    const { placeholder, field: { name, value }, form: { setFieldValue }, options } = props;
    return (
        <InputContainer placeholder={placeholder} name={name}>
            <Picker
                onValueChange={(value) => { setFieldValue(name, value); }}
                selectedValue={value}
                style={{ marginStart: 12 }}
                mode={'dropdown'}>
                {options && options.map((option) => {
                    return (
                        <Picker.Item label={option.name} value={option.id} />
                    );
                })}
            </Picker>
        </InputContainer>
    );
};

export const DatePicker = (props: Props) => {
    const { placeholder, field: { name, value }, form: { setFieldValue, initialValues } } = props;
    const [isPickerVisible, setPickerVisibility] = useState(false);
    let newField = { ...props.field };
    if (value && value !== initialValues[name]) {
        newField = { ...newField, value: getDateFromString(new Date(value)) };
    }
    return (
        <InputContainer placeholder={placeholder} name={name}>
            <Button
                buttonStyle={{ padding: 0 }}
                onPress={() => setPickerVisibility(true)}>
                <Input {...props} field={newField} editable={false} secureTextEntry={false} inputStyle={styles.inputWithContainer} />
            </Button>
            {isPickerVisible &&
                <DateTimePicker
                    onChange={(event, date) => {
                        setPickerVisibility(false);
                        setFieldValue(name, date?.toISOString());
                    }}
                    value={value && value !== initialValues[name] ? new Date(value) : new Date()} />
            }
        </InputContainer>
    );
};
