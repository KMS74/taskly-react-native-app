import { useState } from 'react';
import { StyleSheet, TextInput, FlatList, View, Text } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';

type ShoppingListItemType = {
  id: string;
  name: string;
};

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);

  const [value, setValue] = useState('');

  const handleAddItem = () => {
    if (value) {
      setShoppingList((prev) => [
        ...prev,
        { id: new Date().toTimeString(), name: value },
      ]);
      setValue('');
    }
  };

  return (
    <FlatList
      style={styles.container}
      stickyHeaderIndices={[0]}
      data={shoppingList}
      renderItem={({ item }) => <ShoppingListItem name={item.name} />}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          placeholder="Add item"
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleAddItem}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },
  textInput: {
    backgroundColor: theme.colorWhite,
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginBottom: 8,
    marginHorizontal: 4,
    borderRadius: 50,
    fontSize: 18,
  },
  listEmptyContainer: {
    marginVertical: 18,
    alignItems: 'center',
  },
});
