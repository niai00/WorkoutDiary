import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';

export default function Workouts({ workouts, unit }) {
  const convertDistance = (distance) => {
    if (unit === 'miles') {
      return (distance * 0.621371).toFixed(2);
    }
    return distance;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text>{item.value}</Text>
            <Text>Distance: {convertDistance(item.distance)} {unit}</Text>
            <Text>Duration: {item.duration} min</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}


