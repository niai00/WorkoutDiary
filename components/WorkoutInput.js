import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import DatePickerModal from './DatePickerModal';
import styles from '../styles';

export default function WorkoutInput({ onAddWorkout }) {
  const [selected, setSelected] = useState(null);
  const [dis, setDis] = useState('');
  const [dur, setDur] = useState('');
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddWorkout = () => {
    if (!selected || !dis || !dur) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const newWorkout = {
      sport: selected,
      distance: dis,
      duration: dur,
      date: selectedDate,
    };

    onAddWorkout(newWorkout);
    setSelected(null);
    setDis('');
    setDur('');
    setSelectedDate(moment().format('YYYY-MM-DD')); // Reset to current date
  };

  return (
    <View>
      <Text style={styles.title}>Add Workout</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => setSelected('Run')}>
          <Text style={[styles.sport, selected === 'Run' && styles.selected]}>Run</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected('Ski')}>
          <Text style={[styles.sport, selected === 'Ski' && styles.selected]}>Ski</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected('Swim')}>
          <Text style={[styles.sport, selected === 'Swim' && styles.selected]}>Swim</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder='Distance (km)'
        keyboardType='numeric'
        onChangeText={newDistance => setDis(newDistance)}
        value={dis}
      />

      <TextInput
        style={styles.input}
        placeholder='Duration (min)'
        keyboardType='numeric'
        onChangeText={newDuration => setDur(newDuration)}
        value={dur}
      />

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dateButtonText}>{selectedDate}</Text>
      </TouchableOpacity>

      <DatePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectDate={(date) => {
          setSelectedDate(date);
          setModalVisible(false);
        }}
        selectedDate={selectedDate}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddWorkout}
      >
        <Text style={styles.addButtonText}>Add Workout</Text>
      </TouchableOpacity>
    </View>
  );
}
