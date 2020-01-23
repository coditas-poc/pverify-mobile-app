import React, { useState } from 'react';
import { Formik, Field, FormikProps } from 'formik';
import Input, { InputWithBorder, InputWithDatePicker } from 'Components/Input';
import { Other, Primary } from 'Components/Button';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SignupScreenStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignupSchema } from '../../Utils/formikValidation';
import { normalize, screenWidth } from '../../Theme/Metrics';
import { Colors } from 'Theme';
import { PickerWithContainer } from 'App/Components/Picker';
import { sexPicker, providerDummy } from 'App/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
    navigation: any;
};
type CheckBoxProps = {
    isChecked: boolean;
    onPress: any;
    text: string;
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
                                component={InputWithDatePicker}
                            />
                            <Field
                                id="outlined-sex-picker"
                                placeholder="Sex"
                                name="sex"
                                options={sexPicker}
                                component={PickerWithContainer}
                            />
                            <Field
                                id="outlined-provider-picker"
                                placeholder="Provider"
                                name="provider"
                                options={providerDummy}
                                component={PickerWithContainer}
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

const CheckBoxWithText = (props: CheckBoxProps) => {
    const { isChecked, onPress, text } = props;
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <Icon name={isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} size={24} style={{ marginTop: 8 }} />
            </TouchableOpacity>
            <Text style={styles.termsText}>{text}</Text>
        </View>
    );
};
