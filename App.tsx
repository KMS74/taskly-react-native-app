import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ShoppingListItem from './components/ShoppingListItem';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Milk" />
      <ShoppingListItem name="Bread" />

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
