import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import WorkoutInput from './components/WorkoutInput';
import WorkoutList from './components/WorkoutList';
import styles from './styles';

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <FlatList
      style={styles.container}
      data={workouts}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={<WorkoutInput onAddWorkout={addWorkout} />}
      renderItem={({ item }) => <WorkoutList workout={item} />}
      ListFooterComponent={<StatusBar style="auto" />}
    />
  );
}






