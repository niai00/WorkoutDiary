import { useState } from 'react';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';
import Settings from './components/Settings';
import { BottomNavigation, MD3LightTheme, PaperProvider } from 'react-native-paper';
import WorkoutContext from './components/WorkoutContext';
import { SettingsProvider } from './components/SettingsContext';

const routes = [
  { key: 'addworkout', title: 'Add Workout', focusedIcon: 'plus-circle-outline' },
  { key: 'workoutlist', title: 'Workout List', focusedIcon: 'format-list-bulleted' },
  { key: 'settings', title: 'Settings', focusedIcon: 'account-edit-outline' }
];

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [navIndex, setNavIndex] = useState(0);

  const renderScene = BottomNavigation.SceneMap({
    addworkout: AddWorkout,
    workoutlist: WorkoutList,
    settings: Settings
  });

  return (
    <PaperProvider theme={MD3LightTheme}>
      <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
        <SettingsProvider>
          <BottomNavigation
            navigationState={{ index: navIndex, routes }}
            onIndexChange={setNavIndex}
            renderScene={renderScene}
          />
        </SettingsProvider>
      </WorkoutContext.Provider>
    </PaperProvider>
  );
}

