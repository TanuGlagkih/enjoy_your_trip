import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ItemList from '../components/ItemList';

import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { defaultItemsState } from '../assets/data';
import { setItems } from '../services/itemListSlice';

export default function ItemListScreen({ route }: RootStackScreenProps<'ItemList'>) {
    // const dispatch = useDispatch();
    // //  const storageData = getItemData();

    // useEffect(() => {
    //     // itemData ?
    //     //  dispatch(setItems(itemData))
    //     //    :
    //     dispatch(setItems(defaultItemsState[0]))
    //     console.log(defaultItemsState)
    // }, [])

    return (
        <View style={styles.container}>
            <ItemList title={route.params.title} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
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