import { FlatList, StyleSheet, View } from 'react-native';
import SectionItem from './SectionItem';
import { NavigationProp } from "@react-navigation/native";
import { sectionsNames } from '../assets/data';
import { useState, useEffect } from 'react';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

type TSections = {
    title: string;
    key: string;
};

export default function SectionList({ navigation }: RouterProps) {
    const [sections, setSections] = useState<TSections[]>()

    useEffect(() => {
        setSections(sectionsNames)
    }, []);

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
    },
});
