import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
const Card = ({ headerDecription, typeDecription }) => {
    return (
        <View style={styles.cardCointainer}>
            <Text style={styles.cardHeaderText}>
                {headerDecription}
                {/* Take a picture of your {headerDecription}’s licence, */}
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
