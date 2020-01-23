import React from 'react';
import { Picker } from 'react-native';
import { ConfirmContainer } from '../InputContainer';
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
export const PickerWithContainer = (props: Props) => {
    const { placeholder, field: { name, value }, form: { setFieldValue }, options } = props
    return (
        <ConfirmContainer placeholder={placeholder} name={name}>
            <Picker
                onValueChange={(value) => { setFieldValue(name, value) }}
                selectedValue={value}
                style={{ marginStart: 12 }}
                mode={'dropdown'}>
                {options && options.map((option) => {
                    return (
                        <Picker.Item label={option.name} value={option.name} />
                    );
                })}
            </Picker>
        </ConfirmContainer>
    )
}