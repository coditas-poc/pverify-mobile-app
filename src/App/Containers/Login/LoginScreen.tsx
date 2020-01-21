import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, StatusBar } from 'react-native';

import styles from './LoginScreenstyle';
import { Images, Colors } from 'Theme';
import { LoginForm } from './LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                <View style={styles.logoContainer}>
                    <Image source={Images.logo} style={styles.logo} />
                </View>
                
                    <LoginForm />
                
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
)(LoginScreen);
