import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemListScreen from '../screens/ItemListScreen';

import SectionItem from './SectionItem';
import { View } from './Themed';

export default function SectionList({ navigation }: any) {
    const [sections, setSections] = useState([
        { title: 'Одежда', key: '1' },
        { title: 'Обувь', key: '2' },
        { title: 'Гигиена', key: '3' },
        { title: 'Документы/деньги', key: '4' },
        { title: 'Гаджеты', key: '5' },
        { title: 'Дорога', key: '6' },
        { title: 'Прочее', key: '7' },
    ])

    const openItemsList = (title: string) => {
        navigation.navigate('ItemList', { title })
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList data={sections} renderItem={({ item }) => (
                <SectionItem el={item} key={item.key} openItemsList={(title: string) => openItemsList(title)} />
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        //   backgroundColor: '#efedef',
    },
});
