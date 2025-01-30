import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../theme';

type Props = {
  name: string;
  isCompleted?: boolean;
};

const ShoppingListItem = ({ name, isCompleted }: Props) => {
  const handleDelete = () => {
    Alert.alert('Delete', `Are you sure you want to delete ${name}?`, [
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => console.log('ok delete'),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={16}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
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
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
  },
});
