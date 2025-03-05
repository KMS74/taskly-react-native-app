import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
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
