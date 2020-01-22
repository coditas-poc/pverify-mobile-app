import React, { Component } from 'react';
import { Formik } from 'formik';
import { ButtomContent } from './ButtomContent';
import { View } from 'react-native';
import { Primary } from 'App/Components/Button';
import styles from './SignupScreenStyle';
import { SignUpButomContent } from './SignUpButtomContent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {
    initialValues: any;
    children: any;
    onSubmit: any;
    navigation: any;
};
type State = {
    page: number;
    values: any;
};

class Wizard extends Component<Props, State> {
    static Page = ({ children, parentState }: any) => {
        return children(parentState);
    }
    constructor(props: any) {
        super(props);
        this.state = {
            page: 0,
            values: this.props.initialValues,
        };
    }
    next = (values: any) =>
        this.setState(state => ({
            page: Math.min(state.page + 1, this.props.children.length - 1),
            values,
        }))

    previous = () =>
        this.setState(state => ({
            page: Math.max(state.page - 1, 0),
        }))
    validationSchema = () => {
        const { children } = this.props;
        const { page } = this.state;
        const activePage: any = React.Children.toArray(children)[page];
        return activePage.props.validationSchema;
    }

    handleSubmit = (values: any, bag: any) => {
        const { children, onSubmit } = this.props;
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values, bag);
        } else {
            this.next(values);
            bag.setSubmitting(false);
            bag.setTouched(true);
        }
    }
    render() {
        const { children } = this.props;
        const { page, values } = this.state;
        const activePage: any = React.Children.toArray(children)[page];
        const isLastPage = page === React.Children.count(children) - 1;
        return (
            <Formik
                initialValues={values}
                enableReinitialize={false}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}>
                {formikProps => {
                    const parentState = { ...formikProps };
                    return (
                        <KeyboardAwareScrollView>
                            <View style={styles.signupCointainer}>
                                {React.cloneElement(activePage, parentState)}
                                {page === 0 && <SignUpButomContent handleSubmit={this.next} />}
                                {page !== 0 && !isLastPage && <ButtomContent skip={this.next} manual={() => { }} />}
                                {isLastPage && <Primary onPress={formikProps.handleSubmit} label="Join" />}
                            </View>
                        </KeyboardAwareScrollView>
                    );
                }}
            </Formik>
        );
    }
}

export default Wizard;
