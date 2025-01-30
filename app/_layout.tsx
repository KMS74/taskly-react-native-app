import { Stack } from 'expo-router';
import React from 'react';

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Shopping List' }} />
      <Stack.Screen name="counter" options={{ title: 'Counter' }} />
      <Stack.Screen name="idea" options={{ title: 'Idea' }} />
    </Stack>
  );
}

export default RootLayout;
