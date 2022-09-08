import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ShoppingForm from './ShoppingForm';
import Item from './Item';
import { View } from './Themed';
import { TRootState } from '../services/configureStore'
import { useDispatch } from 'react-redux';
import { setItemsToBuy } from '../services/shoppingListSlice';
import { defaultShoppingState } from '../assets/data';

export default function ShoppingList() {
    const { items } = useSelector((state: TRootState) => state.shoppingList)
    console.log(items)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(setItemsToBuy(defaultShoppingState))
    // }, [])

    return (
        <View style={styles.mainContainer}>
            <ShoppingForm />
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
