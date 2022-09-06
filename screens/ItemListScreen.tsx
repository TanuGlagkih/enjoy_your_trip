import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ItemList from '../components/ItemList';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { defaultItemsState } from '../assets/data';
import { setItems } from '../services/itemListSlice';
import { Entypo } from '@expo/vector-icons';

export default function ItemListScreen({ route }: RootStackScreenProps<'ItemList'>) {
    const title = route.params.title;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setItems(defaultItemsState[0]))
        console.log(defaultItemsState)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.head}>{title}</Text>
                <Entypo name="pencil" size={24} color='#4c4947' />
            </View>
            <ItemList title={title} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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