import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Form from './Form';
import Item from './Item';
import { TRootState } from '../services/configureStore'

export default function ShoppingList() {
    const { items } = useSelector((state: TRootState) => state.shoppingList)

    return (
        <View style={styles.mainContainer}>
            <Form />
            <View style={styles.mainContainer}>
                <FlatList data={items} renderItem={({ item }) => (
                    <Item el={item} shopping={true} />
                )} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
