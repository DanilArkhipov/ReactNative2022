import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tasks from './pages/tasks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CompletedTasks from './pages/completedTasks';
import { Ionicons } from '@expo/vector-icons';
import { newTasks, completedTasks } from './data/tasks';
import { useState } from 'react';


const Tab = createBottomTabNavigator();
export default function App() {
  const [updateLists, setUpdateLists] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'>
        <Tab.Screen name="Активные задачи" children={() => <Tasks updateLists={updateLists} setUpdateLists={setUpdateLists}></Tasks>} options={{
          tabBarLabel: 'Активные',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="square-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Завершенные задачи" children={() => <CompletedTasks updateLists={updateLists} setUpdateLists={setUpdateLists}></CompletedTasks>} options={{
          tabBarLabel: 'Завершенные',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
