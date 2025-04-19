import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingListItemType } from '../app';

export async function getFromStorage(
  key: string,
): Promise<ShoppingListItemType[]> {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error, 'error getting from the storage');
    return [];
  }
}

export async function saveToStorage(key: string, data: ShoppingListItemType[]) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(error, 'error setting data to the storage ');
  }
}
