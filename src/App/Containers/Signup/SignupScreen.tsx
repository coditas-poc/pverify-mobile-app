import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';

import styles from './SignupScreenStyle';
import { Colors, Images } from 'Theme';
import { DLBackForm } from './DLBackForm';
import { DLFrontForm } from './DLFrontForm';
import { InsuranceBackForm } from './InsuranceBackForm';
import { InsuranceFrontForm } from './InsuranceFrontForm';
import { ProfileReview } from './ProfileReview';
import { SignupForm } from './SignupForm';
import { Wizard } from './Wizard';
import { SignupSchema, ProfileConfirmSchema } from '../../Utils/formikValidation';
import Header from 'App/Components/Header';
import { RNCamera, RNCameraProps } from 'react-native-camera';

type Props = {
    navigation: any;
};
type State = {
    flash: 'off' | 'on' | 'auto' | 'torch',
    zoom: number,
    autoFocus: 'off' | 'on',
    depth: number,
    type: 'back' | 'front',
    whiteBalance: RNCameraProps['whiteBalance'],
    ratio: string,
    recordOptions: {
        mute: boolean,
        maxDuration: 5,
        quality: any,
    },
    isRecording: boolean,
    canDetectFaces: boolean,
    canDetectText: boolean,
    canDetectBarcode: boolean,
    faces: [],
    textBlocks: [],
    barcodes: RNCameraProps['barCodeTypes'],
};

class SignupScreen extends Component<Props, State> {
    child: React.RefObject<any>;

    cameraRef;
    static navigationOptions = ({ navigation }: Props) => {
        const { state } = navigation;
        const page = state.params && state.params.page;
        const title = state.params && state.params.title;
        return {
            headerLeft: <Header.Left type={Images.back} onPress={() => page !== 0 ?
                navigation.state.params.previous() : navigation.pop()} />,
            headerTitle: <Header.Title title={title} />,
            headerRight: page !== 0 ? <Header.Right type="Text" name="Skip" onPress={() => navigation.state.params.next()} /> : null,
        };
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.child = React.createRef();
        this.state = {
            flash: 'off',
            zoom: 0,
            autoFocus: 'on',
            depth: 0,
            type: 'back',
            whiteBalance: 'auto',
            ratio: '16:9',
            recordOptions: {
                mute: false,
                maxDuration: 5,
                quality: RNCamera.Constants.VideoQuality['288p'],
            },
            isRecording: false,
            canDetectFaces: false,
            canDetectText: false,
            canDetectBarcode: false,
            faces: [],
            textBlocks: [],
            barcodes: [],
        };

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
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            dob: 'Select Date',
            sex: 'select gender',
            provider: 'select provider',
            memberId: '',
            condition1: false,
            condition2: false,
        };

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <Wizard
                    cameraRef={this.cameraRef}
                    ref={this.child}
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    navigation={this.props.navigation} >
                    <Wizard.Page validationSchema={SignupSchema}>
                        {() => <SignupForm />}
                    </Wizard.Page>
                    <Wizard.Page validationSchema={SignupSchema}>
                        {(props: any) => <DLFrontForm onCapture={cRef => this.cameraRef = cRef} {...props} />}
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
                    <Wizard.Page validationSchema={ProfileConfirmSchema}>
                        {() => <ProfileReview />}
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
