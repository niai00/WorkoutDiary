import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import { SegmentedButtons, TextInput } from 'react-native-paper';

export default function Home({ addWorkout, unit }) {
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddWorkout = () => {
    if (value && distance && duration) {
      addWorkout(value, distance, duration);
      setValue('');
      setDistance('');
      setDuration('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: 'run', label: 'Run' },
          { value: 'ski', label: 'Ski' },
          { value: 'swim', label: 'Swim' }
        ]}
      />

      <TextInput
        label={`Distance (${unit === 'km' ? 'km' : 'miles'})`}
        value={distance}
        onChangeText={setDistance}
        keyboardType='numeric'
      />

      <TextInput
        label='Duration (min)'
        value={duration}
        onChangeText={setDuration}
        keyboardType='numeric'
      />

      <Button title="Add Workout" onPress={handleAddWorkout} />
    </SafeAreaView>
  );
}
