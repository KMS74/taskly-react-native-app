import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        Increment
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(count - 1)}>
        Decrement
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 12,
  },
  text: {
    fontSize: 24,
  },
});
