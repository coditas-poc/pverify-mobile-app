import React, { useState } from 'react';
import { Picker, TouchableOpacity } from 'react-native';
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
                        <Picker.Item label={option.name} value={option.name} />
                    );
                })}
            </Picker>
        </InputContainer>
    );
};

export const DatePicker = (props: Props) => {
    const { placeholder, field: { name, value }, form: { setFieldValue } } = props;
    const [isPickerVisible, setPickerVisibility] = useState(false);
    let newField = { ...props.field };
    if (value) {
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
                    value={value ? new Date(value) : new Date()} />
            }
        </InputContainer>
    );
};
