import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputWithBorder } from 'Components/Input';
import { View, Text } from 'react-native';
import styles from './SignupScreenStyle';
import { DropDownPicker, DatePicker } from 'App/Components/Picker';
import { sexPicker, providerDummy } from 'App/Constants';
import { CheckBoxWithText } from 'Components/Checkbox';
import FormError from 'App/Components/FormError';
type Props = {
    navigation?: any;
};

export const ProfileReview = (props: Props) => {
    return (
        <View style={styles.signupCointainer}>
            <Text style={styles.finalRegisterScreenHeaderText}>Please review and finish your profile</Text>
            <View style={{ justifyContent: 'center', marginTop: 22 }}>
                <Field
                    id="outlined-name-input"
                    placeholder="Name"
                    name="name"
                    showError={false}
                    component={InputWithBorder} />
                <Field
                    id="outlined-date-of-birth-input"
                    placeholder="Date of birth"
                    name="dob"
                    showError={false}
                    component={DatePicker}
                />
                <Field
                    id="outlined-sex-picker"
                    placeholder="Sex"
                    name="sex"
                    options={sexPicker}
                    component={DropDownPicker}
                />
                <Field
                    id="outlined-provider-picker"
                    placeholder="Provider"
                    name="provider"
                    options={providerDummy}
                    component={DropDownPicker}
                />
                <Field
                    id="outlined-member-input"
                    placeholder="Member ID"
                    name="memberId"
                    showError={false}
                    component={InputWithBorder} />
            </View>
            <View style={styles.checkBoxParentContainer}>
                <Field
                    id="outlined-condition-1"
                    name="condition1"
                    text={'I have read and accepted MyHealthID’s Terms of use and Privacy policy'}
                    component={CheckBoxWithText}
                />
                <Field
                    id="outlined-condition-2"
                    name="condition2"
                    text={'I have read and accepted MyHealthID’s HIPPA Authorization.'}
                    component={CheckBoxWithText}
                />
                <ErrorMessage name={'condition1' && 'condition2'} component={FormError} />
            </View>
        </View>
    );
};
