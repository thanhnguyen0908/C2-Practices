import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

const App = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    let secTimer = setInterval(() => {
      let hour = new Date().getHours();
      let min = new Date().getMinutes();
      let sec = new Date().getSeconds();

      const computedHour = String(hour).length === 1 ? `0${hour}` : hour;
      const computedMinute = String(min).length === 1 ? `0${min}` : min;
      const computedSecond = String(sec).length === 1 ? `0${sec}` : sec;

      setCurrentDate(
        computedHour + ':' + computedMinute + ':' + computedSecond,
      );
    }, 1000);
    return () => clearInterval(secTimer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={30}
          rotation={0}
          tintColor="red"
          backgroundColor="white"
          dashedTint={{width: 2, gap: 3}}
          style={styles.backCircle}
        />
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={25}
          rotation={180}
          tintColor="red"
          backgroundColor="white"
          dashedBackground={{width: 1, gap: 3}}
          style={styles.frontCircle}
        />
        <View style={{position: 'absolute'}}>
          <Text style={styles.timer}>{currentDate}</Text>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backCircle: {
    opacity: 1,
  },
  frontCircle: {
    position: 'absolute',
    opacity: 0.8,
    justifyContent: 'center',
  },
  timer: {
    color: 'red',
  },
});
