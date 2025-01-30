import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Milk" isCompleted />
      <ShoppingListItem name="Bread" isCompleted />
      <ShoppingListItem name="Eggs" />
      <ShoppingListItem name="Bananas" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
  },
});
