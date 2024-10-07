import * as React from 'react';
import { SafeAreaView, Button, View, Text, Pressable } from 'react-native';
import { Modal, SegmentedButtons, TextInput } from 'react-native-paper';
import { SettingsContext } from './SettingsContext';
import WorkoutContext from './WorkoutContext';
import styles from '../styles/styles';
import { Calendar } from 'react-native-calendars';

export default function AddWorkout() {
  const { setWorkouts } = React.useContext(WorkoutContext);
  const { isUsingMiles } = React.useContext(SettingsContext);
  const [sport, setSport] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [date, setDate] = React.useState({});

  function dateSelected(day) {
    setVisible(false);
    setDate(day);
  }

  const handleSaveWorkout = () => {
    if (!sport || !distance || !duration) {
      alert("Please fill in all fields!");
      return;
    }

    const newWorkout = {
      id: Math.random().toString(),
      type: sport,
      distance: parseFloat(distance),
      unit: isUsingMiles ? 'miles' : 'km',
      duration: parseInt(duration),
      date: date.dateString || new Date().toISOString().split('T')[0],
    };

    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    setSport('');
    setDistance('');
    setDuration('');
    setDate({});
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.segmentedButtons}>
        <SegmentedButtons
          value={sport}
          onValueChange={setSport}
          buttons={[
            { value: 'run', label: 'Run', icon: 'run' },
            { value: 'ski', label: 'Ski', icon: 'ski'},
            { value: 'swim', label: 'Swim', icon: 'swim' },
          ]}
        />

        <TextInput
          style={styles.input}
          label={`Distance (${isUsingMiles ? 'miles' : 'km'})`}
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          label="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />

        <View>
          <Modal visible={visible} animationType="slide" style={styles.modalContainer}>
            <View>
              <Calendar 
                onDayPress={dateSelected}
                markedDates={date.dateString ? { [date.dateString]: { selected: true } } : {}}
              />
              <Button title="Close" onPress={() => setVisible(false)} />
            </View>
          </Modal>

          {!visible && (
            <Pressable onPress={() => setVisible(true)} style={styles.dateSelect}>
              <Text style={styles.dateText}>{date.dateString ? date.dateString : 'Select date'}</Text>
            </Pressable>
          )}

          {!visible && (
            <View style={styles.buttonContainer}>
              <Button title="Save Workout" onPress={handleSaveWorkout} />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

