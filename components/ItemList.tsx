import { useEffect, useReducer, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Item from './Item';
import { View, Text } from './Themed';
import { TRootState } from '../services/store'
import { useDispatch } from 'react-redux';
import { defaultItemsState } from '../assets/data';
import { setItems } from '../services/itemListSlice';
import { Entypo } from '@expo/vector-icons';
import ItemsForm from './ItemsForm';

export default function ItemList({ title }: any) {
    const { items } = useSelector((state: TRootState) => state.itemList)
    const dispatch = useDispatch();
    let currentSection: Array<string> | undefined;
    const [wantEdit, setEdit] = useState(false)

    const forceUpdate = useReducer(() => ({}), {})[1] as () => void

    for (let key in items) {
        //@ts-ignore
        if (key == title) currentSection = items[title]
    }

    useEffect(() => {
        dispatch(setItems(defaultItemsState))
    }, [])

    const editList = () => {
        setEdit(true);
        forceUpdate();
    }

    if (!currentSection) return (<Text>Loading...</Text>)

    return (
        <View style={styles.mainContainer}>
            {(wantEdit) ?
                <ItemsForm setEdit={setEdit} title={title} />
                :
                <View style={styles.box}>
                    <Text style={styles.head}>{title}</Text>
                    <TouchableOpacity onPress={() => editList()}>
                        <Entypo
                            name="pencil"
                            size={24}
                            color='#4c4947' />
                    </TouchableOpacity>
                </View>
            }
            <FlatList data={currentSection} renderItem={({ item }) => (
                //@ts-ignore
                <Item el={item} shopping={false} title={title} />
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    box: {
        //flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#ceccce',
        borderBottomWidth: 2,
        padding: 15,
        justifyContent: 'space-between'
    },
    head: {
        fontWeight: 'bold',
        fontSize: 20,
        textDecorationColor: '#4c4947'
    }
});
