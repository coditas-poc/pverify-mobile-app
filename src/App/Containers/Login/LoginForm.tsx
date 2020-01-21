import React from 'react';
import { Formik, Field, FormikProps } from 'formik';
import { LoginSchema } from '../../Utils';
import Input, { InputPasswordWithForgot } from 'Components/Input';
import { Primary, Other } from 'Components/Button';
import { View, Text } from 'react-native';
import styles from './LoginScreenstyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values) => {  }}>
            {(props: FormikProps<any>) => (

                    <KeyboardAwareScrollView>
                <View style={styles.loginCointainer}>
                    <Field
                        id="outlined-email-input"
                        placeholder="Email"
                        name="email"
                        component={Input} />
                    <Field
                        id="outlined-password-input"
                        placeholder="Password"
                        name="password"
                        component={InputPasswordWithForgot}
                        secureTextEntry />
                    <View style={styles.loginSignupWrapper}>
                        <Primary onPress={props.handleSubmit} label="Log In" />
                        <Other
                            onPress={() => { }}
                            label="Sign up"
                            buttonStyle={styles.signUpButton} />
                    </View>
                    <ContinueView />
                    <View style={styles.fbGoogleWrapper}>
                        <Other onPress={() => { }} label="Facebook" />
                        <Other onPress={() => { }} label="Google" />
                    </View>
                </View>
                    </KeyboardAwareScrollView>
            )}

        </Formik>
    );
};

const ContinueView = () => {
    return (
        <View style={styles.continueCointainer}>
            <View style={styles.continueLine} />
            <Text style={styles.containuetext}> or continue with</Text>
            <View style={styles.continueLine} />
        </View>
    );
};
