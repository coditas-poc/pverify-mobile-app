import React from 'react';
import { Field } from 'formik';
import { OtpInput } from 'Components/Input';
import { View, Text } from 'react-native';
import { normalize } from 'App/Theme/Metrics';
import { Colors } from 'Theme';
import Fonts from 'App/Theme/Fonts';

export const OtpForm = ({ values }: any) => {
    // console.log('values', values);
    return (
        <View style={{ alignItems: 'flex-start', marginTop: normalize(16) }}>
            <Text style={{ color: Colors.primary, fontFamily: Fonts.type.base, fontSize: normalize(20) }}>Please enter the pin you</Text>
            <Text style={{ color: Colors.primary, fontFamily: Fonts.type.base, fontSize: normalize(20) }}>received by SMS</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: normalize(24), marginBottom: normalize(16) }}>
                {values.otp.map((otp: any, index: string | number | undefined) => (
                    <Field
                        key={index}
                        id={`outlined-otp-input[${index}]`}
                        name={`otp[${index}]`}
                        component={OtpInput}
                        placeholder="_" />
                ))}
            </View>
        </View>

    );
};
