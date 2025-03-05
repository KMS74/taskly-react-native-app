import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  {
    id: '1',
    name: 'Coffee',
  },
  {
    id: '2',
    name: 'Milk',
  },
  {
    id: '3',
    name: 'Tea',
  },
];

export default function App() {
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Add an item"
        value={value}
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleAddItem}
      />

      {shoppingList.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    backgroundColor: theme.colorWhite,
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    borderRadius: 50,
    fontSize: 18,
  },
});
