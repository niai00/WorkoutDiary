import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
      color: '#6fca9c'
    },
    sport: {
      justifyContent: 'space-around',
      padding: 10,
      margin: 10,
    },
    selected: {
      backgroundColor: '#6fca9c',
      color: 'white',
    },
    input: {
      width: 200,
      borderColor: '#17492e',
      borderWidth: 1,
      margin: 10,
      padding: 5,
      alignSelf: 'center',
    },
    dateButton: {
      width: 200,
      padding: 10,
      borderColor: '#17492e',
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
  
