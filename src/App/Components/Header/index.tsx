import * as React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './style';
import { normalize } from '../../Theme/Metrics';
import { Fonts } from 'App/Theme';
import { Colors } from 'Theme';

type Props = {
    onPress: any;
    type: any;
    children?: any;
};
type TitleProps = {
    title: string,
};

const Header = ({ children }: Props) => {
    return children;
};

Header.Title = ({ title }: TitleProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                padding: normalize(16),
                fontFamily: Fonts.type.base,
                fontSize: normalize(16),
                color: Colors.background,
            }}>{title}</Text>
        </View>
    );
};
Header.Right = ({ onPress, type }: Props) => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}>
            <Image source={type} style={styles.imageButton} />
        </TouchableOpacity>
    );
};

Header.Left = ({ onPress, type }: Props) => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}>
            <Image source={type} style={styles.imageButton} />
        </TouchableOpacity>
    );
};
export default Header;
