import React from 'react';
import { Other, Primary } from 'Components/Button';
import { View, Text } from 'react-native';
import styles from './SignupScreenStyle';
import { normalize, normal } from '../../Theme/Metrics';
import Fonts from 'App/Theme/Fonts';
import { Colors } from 'Theme';

export const SignUpButomContent = ({ handleSubmit }: any) => (
    <>
        <View style={{ justifyContent: 'center', marginTop: '15%', height: 65 }}>
            <Primary onPress={handleSubmit} label="Sign up" />
        </View>
        <View style={{
            marginTop: normalize(23),
            position: 'absolute',
            bottom: normalize(108),
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'flex-start',
        }}>
            <Text style={{
                fontSize: normalize(14),
                fontFamily: Fonts.type.base,
                color: Colors.text,
            }}>Already have an account?</Text>
            <Other
                onPress={() => { }}
                label="Log in"
                buttonStyle={styles.signUpButton} />
        </View>
        <View style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: normalize(33),
            alignItems: 'center',
            width: normalize(272),
            marginTop: normalize(33),
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            <Text style={{
                textAlign: 'justify',
                fontSize: normalize(14),
                fontFamily: Fonts.type.base, color: Colors.text,
            }}> By signing up, you indicate that you have </Text>
            <Text style={{
                textAlign: 'justify',
                fontSize: normalize(14),
                fontFamily: Fonts.type.base, color: Colors.text,
            }}>read and agree to the</Text>
            <Other onPress={() => { }} label="Terms and Service" buttonStyle={styles.signUpButton} />
        </View>
    </>
);
