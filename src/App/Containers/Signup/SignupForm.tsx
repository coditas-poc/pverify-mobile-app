import React from 'react';
import { Field } from 'formik';
import Input from 'Components/Input';
import { Other } from 'Components/Button';
import { View } from 'react-native';

export const SignupForm = (props: any) => {
    return (
        <>
            <View style={{
                justifyContent: 'space-evenly', marginTop: 12,
                flexDirection: 'column',
                height: 170,
            }}>
                <Other onPress={() => { }} label="Continue with Google" />
                <Other onPress={() => { }} label="Continue with Facebook" />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Field
                    id="outlined-email-input"
                    placeholder="Email"
                    name="email"
                    component={Input} />
                <Field
                    id="outlined-password-input"
                    placeholder="Password"
                    name="password"
                    component={Input}
                    secureTextEntry />
                <Field
                    id="outlined-confirm-password-input"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    component={Input}
                    secureTextEntry />
            </View></>

    );
};
