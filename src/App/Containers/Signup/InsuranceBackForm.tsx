import React from 'react';
import { Formik, FormikProps } from 'formik';
import { View } from 'react-native';
import styles from './SignupScreenStyle';
import { SignupSchema } from '../../Utils/formikValidation';

import Card from 'Components/Card';
import { ButtomContent } from './ButtomContent';
type Props = {
    navigation: any;
};
export const InsuranceBackForm = (props: Props) => {
    const initialValues = {
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {  }}>
            {(formProps: FormikProps<any>) => (
                <View style={styles.signupCointainer}>
                    <Card headerDecription="Take a picture of your Insurance card," typeDecription="then the back" />
                    <ButtomContent skip={() => {}} manual={() => {}}/>
                </View>
            )}
        </Formik>
    );
};
