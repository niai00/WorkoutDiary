import React from 'react';
import { View, Modal, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from '../styles';

export default function DatePickerModal({ visible, onClose, onSelectDate, selectedDate }) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => onSelectDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#6ad8ae' },
            }}
            current={selectedDate}
          />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}
