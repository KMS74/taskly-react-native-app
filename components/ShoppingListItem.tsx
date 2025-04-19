import {
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from '../theme';

type Props = {
  name: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

const ShoppingListItem = ({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) => {
  const handleDelete = () => {
    Alert.alert('Delete', `Are you sure you want to delete ${name}?`, [
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => onDelete(),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Pressable
      onPress={onToggleComplete}
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Entypo
          name={!isCompleted ? 'check' : 'circle'}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          numberOfLines={1}
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={16}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ShoppingListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
    color: theme.colorGrey,
  },

  itemText: {
    fontSize: 18,
    fontWeight: '200',
    flex: 1,
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
});
