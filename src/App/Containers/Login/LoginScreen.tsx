import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';

import styles from './LoginScreenstyle';
import { Images } from 'App/Theme';
import { LoginForm } from './LoginForm';

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={Images.logo} style={styles.logo}/>
                </View>
                <LoginForm/>
            </View>
        );
    }

}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => (
    {}
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
