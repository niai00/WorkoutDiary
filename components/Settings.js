import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import styles from '../styles/styles';

export default function Settings({ unit, setUnit }) {
  return (
    <SafeAreaView>
      <Text>Select Distance Unit:</Text>
      <SegmentedButtons
        value={unit}
        onValueChange={setUnit}
        buttons={[
          { value: 'km', label: 'Kilometers' },
          { value: 'miles', label: 'Miles' }
        ]}
      />
    </SafeAreaView>
  );
}
