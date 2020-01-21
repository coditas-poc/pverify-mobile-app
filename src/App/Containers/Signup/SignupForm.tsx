import React from 'react';
import { Formik, Field, FormikProps } from 'formik';
import Input from 'Components/Input';
import { Other, Primary } from 'Components/Button';
import { View, Text } from 'react-native';
import styles from './SignupScreenStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignupSchema } from '../../Utils/formikValidation';
import { normalize, screenWidth } from '../../Theme/Metrics';
import Fonts from 'App/Theme/Fonts';
import { Colors } from 'Theme';
type Props = {
    navigation: any;
};
export const SignupForm = (props: Props) => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => { }}>
            {(formProps: FormikProps<any>) => (
                <KeyboardAwareScrollView>
                    <View style={styles.signupCointainer}>
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
                        </View>
                        <View style={{ justifyContent: 'center', marginTop: '15%' }}>
                            <Primary onPress={formProps.handleSubmit} label="Sign up" />
                        </View>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start', marginTop: '10%' }}>
                            <Text style={{ fontSize: normalize(14), fontFamily: Fonts.type.base, color: Colors.text }}>Already have an account?</Text>
                            <Other
                                onPress={() => { }}
                                label="Log in"
                                buttonStyle={styles.signUpButton} />
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', width: '100%', marginTop: '10%' }}>
                            <Text style={{
                                textAlign: 'left',
                                fontSize: normalize(14),
                                padding: 8,
                                fontFamily: Fonts.type.base, color: Colors.text,
                            }}> By signing up, you indicate that you have read and agree to the</Text>
                            <Other onPress={() => { }} label="Terms and Service" buttonStyle={styles.signUpButton} />
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            )}

        </Formik>
    );
};
