import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

type TSectionItem = {
    title: string;
    key: string;
};

export default function SectionItem(props: { el: TSectionItem }) {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')} >
            <Text style={styles.itemText} >
                {props.el.title}
            </Text>
        </ TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemText: {
        padding: 20,
        textAlign: 'justify',
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#6ead3a',
        //   backgroundColor: '#ceccce',
        marginTop: 10,
        opacity: 10,
        flex: 1,
    },
});