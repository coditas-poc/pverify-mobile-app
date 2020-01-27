import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';

import styles from './PvScreenStyles';
import { Colors, Images } from 'Theme';
import { Wizard } from './Wizard';
import { SignupSchema } from '../../Utils/formikValidation';
import Header from 'App/Components/Header';
import { PhoneForm } from './PhoneForm';
import { OtpForm } from './OtpForm';

type Props = {
    navigation: any;
};

class PhoneVerificationScreen extends Component<Props> {
    child: React.RefObject<any>;
    static navigationOptions = ({ navigation }: Props) => {
        const { state } = navigation;
        const page = state.params && state.params.page;
        const title = state.params && state.params.title;
        return {
            headerLeft: <Header.Left type={Images.back} onPress={() => page !== 0 ?
                navigation.state.params.previous() : navigation.pop()} />,
            headerTitle: <Header.Title title={title} />,
        };
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.child = React.createRef();
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({
            next: () => this.child.current.next(),
            previous: () => this.child.current.previous(),
            page: this.child.current.state.page,
            title: this.child.current.state.title,
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
            phoneNumber: '',
            otp: ['', '', '', ''],
        };
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <Wizard
                    ref={this.child}
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    navigation={this.props.navigation} >
                    {({ values }: any) => {}}
                    <Wizard.Page validationSchema={SignupSchema}>
                        {(props: any) => {
                            return <PhoneForm />;
                        }}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {(props: any) => {
                            return <OtpForm {...props}/>;
                        }}
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
)(PhoneVerificationScreen);
