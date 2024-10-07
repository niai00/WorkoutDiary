import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b6d1cd',
    flex: 1
  },
  segmentedButtons: {
    justifyContent: 'center',
    margin: 20,
    marginTop: 50
  },
  input: {
    justifyContent: 'center',
    backgroundColor: '#d7f1e9',
    margin: 20,
    borderRadius: 5,
    width: 250
  },
  buttonContainer: {
    justifyContent: 'center',
    margin: 20,
    width: 250
  },
  dateSelect: {
    backgroundColor: '#ace2e6',
    padding: 5,
    height: 30,
    width: 250,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20
  },
  modalContainer: {
    height: 20,
  },
  workoutItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  switchContainer: {
    marginTop: 60,
    alignItems: 'center',
    flex: 1
  },
  workoutList: {
    backgroundColor: '#b6d1cd',
    padding: 30
  }
});

export default styles;