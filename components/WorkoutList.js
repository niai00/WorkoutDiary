import React, { useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import WorkoutContext from './WorkoutContext';
import styles from '../styles/styles';

const WorkoutList = () => {
  const { workouts } = useContext(WorkoutContext);
  const [selectedSport, setSelectedSport] = useState('run');

  const getTotalDistance = (sport) => {
    return workouts
      .filter(workout => workout.type === sport)
      .reduce((total, workout) => total + workout.distance, 0);
  };

  const filteredWorkouts = workouts.filter(workout => workout.type === selectedSport);

  const renderWorkoutItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text>Type: {item.type}</Text>
      <Text>Distance: {item.distance} {item.unit}</Text>
      <Text>Duration: {item.duration} min</Text>
      <Text>Date: {item.date}</Text>
    </View>
  );

  const runDistance = getTotalDistance('run');
  const skiDistance = getTotalDistance('ski');
  const swimDistance = getTotalDistance('swim');

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={selectedSport}
        onValueChange={setSelectedSport}
        buttons={[
          { value: 'run', label: `Run (${runDistance} ${workouts[0]?.unit || 'miles'})`, icon: 'run' },
          { value: 'ski', label: `Ski (${skiDistance} ${workouts[0]?.unit || 'miles'})`, icon: 'ski' },
          { value: 'swim', label: `Swim (${swimDistance} ${workouts[0]?.unit || 'miles'})`, icon: 'swim' },
        ]}
        style={styles.segmentedButtons}
      />

      {filteredWorkouts.length > 0 ? (
        <FlatList
          data={filteredWorkouts}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkoutItem}
          style={styles.workoutList}
        />
      ) : (
        <Text style={styles.noWorkoutsText}>No workouts for this sport.</Text>
      )}
    </View>
  );
};

export default WorkoutList;



