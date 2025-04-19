import { useState } from 'react';
import { StyleSheet, TextInput, FlatList, View, Text } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
};

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);

  const [value, setValue] = useState('');

  const handleAddItem = () => {
    if (value) {
      setShoppingList((prev) => [
        { id: new Date().toTimeString(), name: value, isCompleted: false },
        ...prev,
      ]);
      setValue('');
    }
  };

  const handleDeleteItem = (id: string) => {
    setShoppingList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item?.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  const renderItem = ({ item }: { item: ShoppingListItemType }) => (
    <ShoppingListItem
      name={item.name}
      isCompleted={!!item.completedAtTimestamp}
      onDelete={() => handleDeleteItem(item.id)}
      onToggleComplete={() => handleToggleComplete(item.id)}
    />
  );

  return (
    <FlatList
      style={styles.container}
      stickyHeaderIndices={[0]}
      data={shoppingList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
    paddingVertical: 12,
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
