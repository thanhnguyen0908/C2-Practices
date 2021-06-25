import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from '../styles/styles'
import {increaseCounter, decreaseCounter} from '../actions/action';
import {SomeProps} from '../props/props'

export default function CounterApp() {
  const result = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return(
  <View style={styles.container}>
    <View style={styles.aligner}>
        <SomeProps sometext='Increase' onPressHandler={() =>dispatch(increaseCounter())}/>
        <Text style={styles.textmiddle}>{result}</Text>
        <SomeProps sometext='Decrease' onPressHandler={() =>dispatch(decreaseCounter())}/>
    </View>
  </View>
  );
}
