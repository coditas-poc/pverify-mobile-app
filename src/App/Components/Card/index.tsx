import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
type CardProps = {
    headerDecription: string;
    typeDecription: string;
    children: React.ReactNode
};
const Card = ({ headerDecription, typeDecription, children }: CardProps) => {
    return (
        <View style={styles.cardCointainer}>
            <Text style={styles.cardHeaderText}>
                {headerDecription}
            </Text>
            <Text style={styles.cardcontentText}>{typeDecription}</Text>
            <View style={styles.cardCameracontent}>
                {children}
            </View>
            <Text style={styles.cardbottomtext}>
                This will be used to verify your Identification
            </Text>
        </View>
    );
};

export default Card;
