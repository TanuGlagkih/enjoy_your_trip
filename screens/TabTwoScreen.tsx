import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import List from '../components/ShoppingList';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
