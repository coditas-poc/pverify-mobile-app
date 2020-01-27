import React from 'react';
import { Field } from 'formik';
import { OtpInput } from 'Components/Input';
import { View, Text, Clipboard, ToastAndroid } from 'react-native';
import { normalize } from 'App/Theme/Metrics';
import { Colors } from 'Theme';
import Fonts from 'App/Theme/Fonts';
import { getOTPArrayFromString } from 'App/Utils/General';

export const OtpForm = ({ values, setFieldValue }: any) => {
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
                        onTextChange={(text: any) => autoFillAllOTP(text, setFieldValue, index)}
                        placeholder="_" />
                ))}
            </View>
        </View>

    );
};

const autoFillAllOTP = async (OTP: any, setFieldValue: any, position?: any) => {
    let copiedText = await Clipboard.getString();
    if (copiedText.charAt(0) === OTP) {
        let otpArray = getOTPArrayFromString(copiedText);
        if (!otpArray) {
            ToastAndroid.show('Invalid Paste String', ToastAndroid.SHORT);
        } else {
            otpArray.map((otp, index) => {
                setFieldValue(`otp[${index}]`, otp);
            });
        }
    } else {
        setFieldValue(`otp[${position}]`, OTP);
    }
};
