import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { SegmentedButtons, TextInput } from 'react-native-paper';
import DateModal from './DateModal';

export default function Home({ addWorkout, unit }) {
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleAddWorkout = () => {
    if (value && distance && duration) {
      addWorkout(value, distance, duration, selectedDate);
      setValue('');
      setDistance('');
      setDuration('');
      setSelectedDate('');
    }
  };

  return (
    <SafeAreaView>
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

      <Button title="Select Date" onPress={() => setShowDateModal(true)} />
      <Button title="Add Workout" onPress={handleAddWorkout} />

      <DateModal
        visible={showDateModal}
        onClose={() => setShowDateModal(false)}
        onSelectDate={(date) => {
          setSelectedDate(date);
          setShowDateModal(false);
        }}
        selectedDate={selectedDate}
      />
    </SafeAreaView>
  );
}

