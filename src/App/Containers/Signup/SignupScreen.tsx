import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';

import styles from './SignupScreenStyle';
import { Colors, Images } from 'Theme';
import { DLBackForm } from './DLBackForm';
import { DLFrontForm } from './DLFrontForm';
import { InsuranceBackForm } from './InsuranceBackForm';
import { InsuranceFrontForm } from './InsuranceFrontForm';
import { SignupForm } from './SignupForm';
import Wizard from './Wizard';
import { SignupSchema } from '../../Utils/formikValidation';

type Props = {
    navigation: any;
};

class SignupScreen extends Component<Props> {
    child: React.RefObject<any>;
    static navigationOptions = ({ navigation }: Props) => ({
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.state.params.page === 0 ? navigation.pop() : navigation.state.params.previous()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            ),
        })
    constructor(props: Readonly<Props>) {
        super(props);
        this.child = React.createRef();
    }
    onSubmit = (values: any, actions: { setSubmitting: (arg0: boolean) => void; }) => {
        sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        });
    }
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            previous: () => this.child.current.previous(),
            page: this.child.current.state.page,
        });
    }
    render() {
        const initialValues = {
            email: '',
            password: '',
            confirmPassword: '',
        };
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <Wizard
                    ref={this.child}
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    navigation={this.props.navigation} >
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <SignupForm />}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <DLFrontForm />}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <DLBackForm />}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <InsuranceFrontForm />}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <InsuranceBackForm />}
                    </Wizard.Page>
                </Wizard>
            </View>
        );
    }

}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignupScreen);
