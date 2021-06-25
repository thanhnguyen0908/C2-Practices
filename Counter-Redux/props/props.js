import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'

export const SomeProps = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPressHandler}>
            <Text style={styles.text}>{props.sometext}</Text>
        </TouchableOpacity>
    );
}