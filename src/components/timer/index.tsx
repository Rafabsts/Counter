import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tempo() {
  const [currentTime, setCurrentTime] = useState(0);

  const incrementTime = () => {
    setCurrentTime(currentTime + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentTime]);

  

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{`Tempo: hours`}</Text>
      <Text style={styles.timeText}>{`Tempo: minutes`}</Text>
      <Text style={styles.timeText}>{`Tempo: seconds`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 24,
  },
});

