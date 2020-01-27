import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, StatusBar } from 'react-native';

import styles from './LoginScreenstyle';
import { Images, Colors } from 'Theme';
import { LoginForm } from './LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type Props = {
    navigation: any;
};
class LoginScreen extends Component<Props> {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.loginCointainer}>
                    <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
                    <View style={styles.logoContainer}>
                        <Image source={Images.logo} style={styles.logo} />
                    </View>
                    <LoginForm navigation={this.props.navigation} />
                </View>
            </KeyboardAwareScrollView>
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
