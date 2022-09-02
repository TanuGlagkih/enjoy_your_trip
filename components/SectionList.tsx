import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableHighlightComponent } from 'react-native';

import Colors from '../constants/Colors';
import SectionItem from './SectionItem';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function SectionList() {
    const [sections, setSections] = useState([
        { title: 'Одежда', key: '1' },
        { title: 'Обувь', key: '2' },
        { title: 'Гигиена', key: '3' },
        { title: 'Документы/деньги', key: '4' },
        { title: 'Гаджеты', key: '5' },
        { title: 'Дорога', key: '6' },
        { title: 'Прочее', key: '7' },
    ])
    return (
        <View style={styles.mainContainer}>
            <FlatList data={sections} renderItem={({ item }) => (
                <SectionItem el={item} />
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
