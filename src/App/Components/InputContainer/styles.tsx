import { StyleSheet } from 'react-native';
import { Fonts } from 'App/Theme';
import { normalize } from 'App/Theme/Metrics';
const styles = StyleSheet.create({
    externalContainer: {
        marginVertical: 12,
    },
    borderContainer: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#777777',
    },
    containerPlaceHolder: {
        position: 'absolute',
        top: -12,
        left: 12,
        lineHeight: normalize(14),
        color: '#777777',
        paddingHorizontal: 6,
        backgroundColor: 'white',
        fontFamily: Fonts.type.base,
    },
});
export default styles;
