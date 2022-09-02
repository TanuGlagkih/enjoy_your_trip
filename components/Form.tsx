import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TextInput, Button } from 'react-native'

export default function Form({ addHandler }: any) {
    const [text, setText] = useState('')

    const onChange = (text: string) => {
        setText(text)
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Введите покупку...' />
            <Button onPress={() => addHandler(text)} title='Добавить' color={'silver'} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: '10%',
        width: '80%',
    },
});