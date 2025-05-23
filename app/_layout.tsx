import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../theme';

function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorCerulean,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: 'Counter',

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: 'Idea',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="lightbulb" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default RootLayout;
