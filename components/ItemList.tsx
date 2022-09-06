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
    const dispatch = useDispatch();
    let currentSection: Array<string> | undefined;

    for (let key in items) {
        //@ts-ignore
        if (key == title) currentSection = items[title]
    }

    useEffect(() => {
        dispatch(setItems(defaultItemsState))
    }, [])

    if (!currentSection) return (<Text>Loading...</Text>)

    return (
        <View style={styles.mainContainer}>
            {/* <Form /> */}
            <View style={styles.mainContainer}>
                <FlatList data={currentSection} renderItem={({ item }) => (
                    // <Text>{item}</Text>
                    //@ts-ignore
                    <ShoppingItem el={item} shopping={false} title={title} />
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
