import React, { useState } from 'react';
import { Formik, Field, FormikProps } from 'formik';
import { InputWithBorder } from 'Components/Input';
import { Primary } from 'Components/Button';
import { View, Text } from 'react-native';
import styles from './SignupScreenStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignupSchema } from '../../Utils/formikValidation';
import { DropDownPicker, DatePicker } from 'App/Components/Picker';
import { sexPicker, providerDummy } from 'App/Constants';
import { CheckBoxWithText } from 'Components/Checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
    navigation: any;
};

export const ProfileReview = (props: Props) => {
    const initialValues = {
        name: 'Sam Johnson',
        dob: new Date().toISOString(),
        memberId: '0123456789',
    };
    const [isCondition1Checked, setCondition1] = useState(false);
    const [isCondition2Checked, setCondition2] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => { }}>
            {(formProps: FormikProps<any>) => (
                <KeyboardAwareScrollView>
                    <View style={[styles.signupCointainer,
                    {
                        marginEnd: 12,
                    }]}>
                        <Text style={styles.finalRegisterScreenHeaderText}>Please review and finish your profile</Text>
                        <View style={{ justifyContent: 'center', marginTop: 22 }}>
                            <Field
                                id="outlined-name-input"
                                placeholder="Name"
                                name="name"
                                component={InputWithBorder} />
                            <Field
                                id="outlined-date-of-birth-input"
                                placeholder="Date of birth"
                                name="dob"
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
                                component={InputWithBorder} />
                        </View>
                        <View style={styles.checkBoxParentContainer}>
                            <CheckBoxWithText
                                isChecked={isCondition1Checked}
                                text={'I have read and accepted MyHealthID’s Terms of use and Privacy policy '}
                                onPress={() => setCondition1(!isCondition1Checked)} />
                            <CheckBoxWithText
                                isChecked={isCondition2Checked}
                                text={'I have read and accepted MyHealthID’s HIPPA Authorization.'}
                                onPress={() => setCondition2(!isCondition2Checked)} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Primary onPress={formProps.handleSubmit} label="Join" />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            )}

        </Formik>
    );
};
