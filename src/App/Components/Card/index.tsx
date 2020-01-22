import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
type CardProps = {
    headerDecription: string;
    typeDecription: string;
};
const Card = ({ headerDecription, typeDecription }: CardProps) => {
    return (
        <View style={styles.cardCointainer}>
            <Text style={styles.cardHeaderText}>
                {headerDecription}
            </Text>
            <Text style={styles.cardcontentText}>{typeDecription}</Text>
            <View style={styles.cardCameracontent}>
            </View>
            <Text style={styles.cardbottomtext}>
                This will be used to verify your Identification
            </Text>
        </View>
    );
};

export default Card;
