import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Form from './Form';
import ShoppingItem from './ShoppingItem';
import { View, Text } from './Themed';
import { TRootState } from '../services/store'
import { useDispatch } from 'react-redux';
import { defaultItemsState } from '../assets/data';
import { setItems } from '../services/itemListSlice';

export default function ItemList({ title }: any) {
    const { items } = useSelector((state: TRootState) => state.itemList)
    var currentSection: Array<string>;

    for (let key in items[0]) {
        if (key == title) console.log()
    }
    //@ts-ignore
    // console.log(items[0][Гаджеты])

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItems(defaultItemsState))
    }, [])

    return (
        <View style={styles.mainContainer}>
            {/* <Form /> */}
            <View style={styles.mainContainer}>
                {/* <FlatList data={items} renderItem={({ item }) => (
                   <Text>{ }</Text> 
                )} /> */}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
