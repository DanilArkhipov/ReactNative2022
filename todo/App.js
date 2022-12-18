import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Tasks } from './pages/tasks';
import { CompletedTasks } from './pages/completedTasks';
import { Logs } from './pages/logs';


const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'>
        <Tab.Screen name="Активные задачи" component={Tasks} options={{
          tabBarLabel: 'Активные',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="square-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Завершенные задачи" component={CompletedTasks} options={{
          tabBarLabel: 'Завершенные',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Логи" component={Logs} options={{
          tabBarLabel: 'Логи',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document" color={color} size={size} />
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
