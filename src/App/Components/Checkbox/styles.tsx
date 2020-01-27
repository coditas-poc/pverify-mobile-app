import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from 'Theme';
import { normalize } from '../../Theme/Metrics';
export default StyleSheet.create({
    checkBoxParentContainer: {
        marginVertical: 20,
        width: '90%',
        maxWidth: Metrics.screenWidth,
    },
    checkBoxContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        width: '95%',
    },
    termsText: {
        fontSize: normalize(16),
        lineHeight: normalize(24),
        marginStart: 12,
        fontFamily: Fonts.type.base,
    },
});
