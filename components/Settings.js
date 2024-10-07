import * as React from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { SettingsContext } from './SettingsContext';
import styles from '../styles/styles';

const Settings = () => {
  const { isUsingMiles, toggleUnit } = React.useContext(SettingsContext);

  return (
    <View style={styles.container}>
    <View style={styles.switchContainer}>
      <Text>Meters/Miles</Text>
      <View>
        <Switch value={isUsingMiles} onValueChange={toggleUnit} />
      </View>
    </View>
    </View>
  );
};

export default Settings;
