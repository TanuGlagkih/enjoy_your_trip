import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

type TSectionItem = {
    title: string;
    key: string
};

export default function Item(props: { el: TSectionItem; deleteEl: any }) {
    return (
        <TouchableOpacity onPress={() => props.deleteEl(props.el.key)} style={styles.box}>
            <BouncyCheckbox
                size={25}
                fillColor="#6ead3a"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#6ead3a" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => { }}
            />
            <Text style={styles.itemText} >
                {props.el.title}
            </Text>
        </ TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginLeft: 25,
        borderRadius: 2,
        //backgroundColor: 'lightgrey',
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        fontSize: 20,

        marginTop: 10,
        //  opacity: 10,
        width: '70%',
    },
});