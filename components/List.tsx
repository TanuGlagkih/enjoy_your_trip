import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableHighlightComponent } from 'react-native';

import Colors from '../constants/Colors';
import Form from './Form';
import SectionItem from './SectionItem';
import Item from './Item';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function List() {
    const [sections, setSections] = useState([
        { title: 'Бананы', key: '11' },
        { title: 'Хлеб', key: '22' },
        { title: 'Сыр', key: '33' },
        { title: 'Жвачка', key: '44' },
        { title: 'Сланцы', key: '55' },
        { title: 'Купальник', key: '66' },
    ])
    const addHandler = (text: string): void => {
        setSections((section) => {
            return [
                ...section,
                { title: text, key: Math.random().toString(35).substring(5) }
            ]
        })
    }

    const deleteEl = (key: string): void => {
        setSections((section) => {
            return section.filter(section => section.key !== key)
        })
    }

    return (
        <View>
            <Form addHandler={addHandler} />
            <View style={styles.mainContainer}>
                <FlatList data={sections} renderItem={({ item }) => (
                    <Item el={item} deleteEl={deleteEl} />
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
