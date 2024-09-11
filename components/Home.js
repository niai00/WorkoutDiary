import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { SegmentedButtons, TextInput } from 'react-native-paper';
import DateModal from './DateModal';
import moment from 'moment';
import styles from '../styles/styles';

export default function Home({ addWorkout, unit }) {
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');


  useEffect(() => {
    const today = moment().format('YYYY-MM-DD');
    setSelectedDate(today);
  }, []);

  const handleAddWorkout = () => {
    if (!value) {
      Alert.alert("Error", "Please select a sport.");
      return;
    }

    if (!distance) {
      Alert.alert("Error", "Please enter the distance.");
      return;
    }

    if (!duration) {
      Alert.alert("Error", "Please enter the duration.");
      return;
    }

    addWorkout(value, distance, duration, selectedDate);


    setValue('');
    setDistance('');
    setDuration('');
    setSelectedDate(moment().format('YYYY-MM-DD'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: 'run', label: 'Run', icon: 'run' },
          { value: 'ski', label: 'Ski', icon: 'ski' },
          { value: 'swim', label: 'Swim', icon: 'swim' }
        ]}
      />

      <TextInput
        label={`Distance (${unit === 'km' ? 'km' : 'miles'})`}
        value={distance}
        onChangeText={setDistance}
        keyboardType='numeric'
        style={styles.input}
      />

      <TextInput
        label='Duration (min)'
        value={duration}
        onChangeText={setDuration}
        keyboardType='numeric'
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDateModal(true)}>
        <Text
          style={styles.buttonText}>
          {`Date: ${selectedDate}`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddWorkout}>
        <Text style={styles.buttonText}>Add Workout</Text>
      </TouchableOpacity>


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



