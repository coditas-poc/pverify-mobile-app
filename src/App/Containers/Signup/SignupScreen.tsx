import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';

import styles from './SignupScreenStyle';
import { Colors } from 'Theme';
import { DLBackForm } from './DLBackForm';
import { DLFrontForm } from './DLFrontForm';
import { InsuranceBackForm } from './InsuranceBackForm';
import { InsuranceFrontForm } from './InsuranceFrontForm';
import { SignupForm } from './SignupForm';
import { Wizard } from './Wizard';
import { SignupSchema } from '../../Utils/formikValidation';

type Props = {
    navigation: any;
    page: number;
    values: any;
};

class SignupScreen extends Component<Props> {

    child: React.RefObject<any>;
    static navigationOptions = ({ navigation }: Props) => {
        const page = navigation.state && navigation.state.params && navigation.state.params.page || 0;
        return {
            headerLeft: page !== 0 && (
                <TouchableOpacity
                    onPress={() => navigation.state.params.previous()}>
                    <Text>Back</Text>
                    {/* <Image source={Images.ArrowBack} style={styles.backButton} /> */}
                </TouchableOpacity>
            ),
        };
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.child = React.createRef();
    }
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            previous: () => this.child.current.previous(),
            page: this.child.current.state.page || 0,
        });
    }
    onSubmit = (values: any, actions: any) => {
        // sleep(300).then(() => {
        //     window.alert(JSON.stringify(values, null, 2));
        //     actions.setSubmitting(false);
        // });
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
