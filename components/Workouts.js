import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Workouts({ workouts, unit }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text>{item.value}</Text>
            <Text>Distance: {item.distance} {unit}</Text>
            <Text>Duration: {item.duration} min</Text>
            <Text>Date: {item.selectedDate || 'Not selected'}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}



