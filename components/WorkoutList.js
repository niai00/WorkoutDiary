import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function WorkoutList({ workout }) {
  return (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>Sport: {workout.sport}</Text>
      <Text style={styles.workoutText}>Distance: {workout.distance} km</Text>
      <Text style={styles.workoutText}>Duration: {workout.duration} min</Text>
      <Text style={styles.workoutText}>Date: {workout.date}</Text>
    </View>
  );
}
