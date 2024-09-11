import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Workouts({ workouts, unit }) {
  const convertDistance = (distance) => {
    if (unit === 'miles') {
      return (distance * 0.621371).toFixed(2);
    }
    return distance;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text>{item.value}</Text>
            <Text>Distance: {convertDistance(item.distance)} {unit}</Text>
            <Text>Duration: {item.duration} min</Text>
            <Text>Date: {item.selectedDate || 'Not selected'}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

