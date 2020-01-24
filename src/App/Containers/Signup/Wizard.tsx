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
    title: string;
    values: any;
};

export class Wizard extends Component<Props, State> {
    static Page = ({ children, parentState }: any) => {
        return children(parentState);
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            page: 0,
            title: 'Sign up',
            values: props.initialValues,
        };
    }
    setTitle = (page: number) => {
        let title = '';
        switch (page) {
            case 0:
                title = 'Sign up';
                break;
            case 1:
            case 2:
                title = 'Driver License';
                break;
            case 3:
            case 4:
                title = 'Insurance Card';
                break;
            default:
                title = '';
                break;
        }
        return title;
    }
    next = (values: any) => {
        this.setState(
            state => ({
                page: Math.min(state.page + 1, this.props.children.length - 1),
                title: this.setTitle(Math.min(state.page + 1, this.props.children.length - 1)),
                values,
            }),
            () =>
                this.props.navigation.setParams({
                    page: this.state.page,
                    title: this.setTitle(this.state.page),
                }),
        );
    }

    previous = () =>
        this.setState(
            state => ({
                page: Math.max(state.page - 1, 0),
                title: this.setTitle(Math.max(state.page - 1, 0)),
            }),
            () =>
                this.props.navigation.setParams({
                    page: this.state.page,
                    title: this.setTitle(this.state.page),
                }),
        )
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
                                {page !== 0 && !isLastPage && <ButtomContent capture={() => {}} manual={() => { }} />}
                                {isLastPage && <Primary onPress={formikProps.handleSubmit} label="Join" />}
                            </View>
                        </KeyboardAwareScrollView>
                    );
                }}
            </Formik>
        );
    }
}
