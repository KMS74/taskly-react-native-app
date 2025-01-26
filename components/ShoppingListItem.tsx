import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { theme } from '../theme';

type Props = {
  name: string;
};

const ShoppingListItem = ({ name }: Props) => {
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.8}
        onPress={handleDelete}
      >
        <Text style={styles.buttontext}>Delete</Text>
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
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '200',
  },
  buttonStyle: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttontext: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
