import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, FlatList, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [dis, setDis] = useState('');
  const [dur, setDur] = useState('');
  const [workouts, setWorkouts] = useState([]);
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

    setWorkouts([...workouts, newWorkout]);
    setSelected(null);
    setDis('');
    setDur('');
    setSelectedDate(moment().format('YYYY-MM-DD'));
  };

  const renderItem = ({ item }) => (
    <View style={styles.workoutContainer}>
      <Text style={styles.workoutText}>Sport: {item.sport}</Text>
      <Text style={styles.workoutText}>Distance: {item.distance} km</Text>
      <Text style={styles.workoutText}>Duration: {item.duration} min</Text>
      <Text style={styles.workoutText}>Date: {item.date}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={workouts}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
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

          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.calendarContainer}>
                <Calendar
                  onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setModalVisible(false);
                  }}
                  markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#6ad8ae' },
                  }}
                  current={selectedDate}
                />
                <Button style={{width: 200}}
                  title="Close"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddWorkout}
          >
            <Text style={styles.addButtonText}>Add Workout</Text>
          </TouchableOpacity>
        </>
      }
      renderItem={renderItem}
      ListFooterComponent={<StatusBar style="auto" />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1f3f3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    marginTop: 50,
    textAlign: 'center',
    color: '#137539'
  },
  sport: {
    justifyContent: 'space-around',
    padding: 10,
    margin: 10,
  },
  selected: {
    backgroundColor: '#6ad8ae',
    color: 'white',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    alignSelf: 'center',
  },
  dateButton: {
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#a5d6ec',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  workoutContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#e0f7f7',
    borderRadius: 5,
  },
  workoutText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#6fca9c',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});





