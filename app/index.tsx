import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, FlatList, View, Text } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';
import { getFromStorage, saveToStorage } from '../utils/storage';

export type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

const STORAGE_KEY = 'shopping-cart';

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);

  const [value, setValue] = useState('');

  const handleAddItem = async () => {
    if (value) {
      const newShoppingList = [
        {
          id: new Date().toTimeString(),
          name: value,
          lastUpdatedTimestamp: Date.now(),
        },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue('');
      await saveToStorage(STORAGE_KEY, newShoppingList);
    }
  };

  const handleDeleteItem = async (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
    await saveToStorage(STORAGE_KEY, newShoppingList);
  };

  const handleToggleComplete = async (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          lastUpdatedTimestamp: Date.now(),
          completedAtTimestamp: item?.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
    await saveToStorage(STORAGE_KEY, newShoppingList);
  };

  const orderShoppingList = (shoppingList: ShoppingListItemType[]) => {
    return shoppingList?.sort((item1, item2) => {
      if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
        return item2.completedAtTimestamp - item1.completedAtTimestamp;
      }

      if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
        return 1;
      }

      if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
        return -1;
      }

      if (!item1.completedAtTimestamp && !item2.completedAtTimestamp) {
        return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
      }

      return 0;
    });
  };

  const renderItem = ({ item }: { item: ShoppingListItemType }) => (
    <ShoppingListItem
      name={item.name}
      isCompleted={!!item.completedAtTimestamp}
      onDelete={() => handleDeleteItem(item.id)}
      onToggleComplete={() => handleToggleComplete(item.id)}
    />
  );

  useEffect(() => {
    const fetchShoppingCartData = async () => {
      const data = await getFromStorage(STORAGE_KEY);
      setShoppingList(data);
    };
    fetchShoppingCartData();
  }, []);

  return (
    <FlatList
      style={styles.container}
      stickyHeaderIndices={[0]}
      data={orderShoppingList(shoppingList)}
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
