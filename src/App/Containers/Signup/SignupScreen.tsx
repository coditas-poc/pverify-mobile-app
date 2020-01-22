import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';

import styles from './SignupScreenStyle';
import { Colors } from 'Theme';
// import {  DLBackForm } from './DLBackForm';
// import { DLFrontForm } from './DLFrontForm';
import { InsuranceBackForm } from './InsuranceBackForm';
import { InsuranceFrontForm } from './InsuranceFrontForm';
import { ProfileReview } from './ProfileReview';

type Props = {
    navigation: any;
};

class SignupScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Signup',
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                {/* <SignupForm navigation={this.props.navigation}/> */}
                {/* <DLFrontForm navigation={this.props.navigation}/> */}
                {/* <DLBackForm navigation={this.props.navigation}/> */}
                {/* <InsuranceBackForm navigation={this.props.navigation}/> */}
                {/* <InsuranceFrontForm navigation={this.props.navigation}/> */}
                <ProfileReview navigation={this.props.navigation}/>
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
