import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Settings from './components/Settings';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const [workouts, setWorkouts] = React.useState([]);
  const [unit, setUnit] = React.useState('km');

  const addWorkout = (value, distance, duration) => {
    setWorkouts([...workouts, { value, distance, duration, key: Math.random().toString() }]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add Workout">
          {(props) => <Home {...props} addWorkout={addWorkout} unit={unit} />}
        </Tab.Screen>
        <Tab.Screen name="Workouts">
          {(props) => <Workouts {...props} workouts={workouts} unit={unit} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {(props) => <Settings {...props} unit={unit} setUnit={setUnit} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}








