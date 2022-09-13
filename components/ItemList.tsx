import { useReducer, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Item from './Item';
import { TRootState } from '../services/configureStore'
import { Entypo } from '@expo/vector-icons';
import ItemsForm from './ItemsForm';
import { Preloader } from '../assets/preloader';

type TItemList = {
    title: string;
};

export type TSectionItem = {
    title: string;
    id: string;
    isChecked: boolean;
};

export default function ItemList({ title }: TItemList) {
    const { items } = useSelector((state: TRootState) => state.itemList);
    const [wantEdit, setEdit] = useState(false);

    let currentSection: Array<TSectionItem> | undefined;

    const forceUpdate = useReducer(() => ({}), {})[1] as () => void

    for (let key in items) {
        //@ts-ignore
        if (key == title) currentSection = items[title]
    }

    const editList = () => {
        setEdit(true);
        forceUpdate();
    }

    if (!currentSection) return <Preloader />

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
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        width: '60%',
    },
});
