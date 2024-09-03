import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Run from './components/run.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add workout</Text>

      <Run />

      <Button
        title='Add workout'
        color={'#1b3528'}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
});

