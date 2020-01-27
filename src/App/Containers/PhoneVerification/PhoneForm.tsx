import React from 'react';
import { Field } from 'formik';
import Input from 'Components/Input';
import { View, Text } from 'react-native';
import { normalize } from 'App/Theme/Metrics';
import { Fonts } from 'App/Theme';
import { Colors } from 'Theme';

export const PhoneForm = (props: any) => {
    return (
        <View style={{ alignItems: 'flex-start', marginTop: normalize(16) }}>
            <Text style={{ color: Colors.primary, fontFamily: Fonts.type.base, fontSize: normalize(20) }}>Please verify your phone </Text>
            <Text style={{ color: Colors.primary, fontFamily: Fonts.type.base, fontSize: normalize(20) }}>number!</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: normalize(24), marginBottom: normalize(16) }}>
                <Field
                    id="outlined-phone-input"
                    placeholder="Phone"
                    name="phone"
                    component={Input} />
            </View>
            <Text style={{
                marginBottom: normalize(24),
                width: normalize(288),
                color: Colors.placeholder,
                fontFamily: Fonts.type.base,
                fontSize: normalize(16),
                textAlign: 'center',
            }}>To secure your account, we need to verify your identity. We will send you a pin that you will enter on the next screen</Text>
        </View>

    );
};
