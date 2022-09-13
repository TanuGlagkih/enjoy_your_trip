import { StyleSheet, View } from 'react-native';
import List from '../components/ShoppingList';

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
