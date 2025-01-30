import { useRouter } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CounterScreen() {
  const router = useRouter();
  const handlePress = () => router.navigate('/idea');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Go to Idea</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});
