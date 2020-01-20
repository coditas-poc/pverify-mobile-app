import React from 'react';
import { Formik, Field } from 'formik';
import { LoginSchema } from '../../Utils';
import Input from 'App/Components/Input';
import Button from 'App/Components/Button';
import { View } from 'react-native';

export const LoginForm = () => {
    const intialValues = {
        email: '',
        password: '',
    };

    return (
        <Formik
            initialValues={intialValues}
            validationSchema={LoginSchema}
            onSubmit={() => { }}>
            {({ handleSubmit }) => (
                <View style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Field
                        placeholder="Email"
                        name="email"
                        component={Input}
                    />
                    <Field
                        placeholder="Password"
                        name="password"
                        component={Input}
                    />
                    <Button.Primary onPress={() => {}} label="Log In"/> 

                </View>
            )}

        </Formik>
    );
};
