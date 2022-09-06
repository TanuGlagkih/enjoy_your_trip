import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ItemList from '../components/ItemList';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { defaultItemsState } from '../assets/data';
import { setItems } from '../services/itemListSlice';
import { TRootState } from '../services/store';

export default function ItemListScreen({ route }: RootStackScreenProps<'ItemList'>) {
    const title = route.params.title;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItems(defaultItemsState))
        console.log(defaultItemsState)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.head}> {title}</Text>
            <ItemList title={title} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {

    }
});