import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from './Themed';
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { addItem } from '../services/itemListSlice';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function ItemsForm({ setEdit, title }: any) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onChange = (text: string) => {
        setText(text)
    }

    const addHandler = (text: string): void => {
        const item = {
            title: text,
            id: Math.random().toString(35).substring(5),
            isChecked: false
        }

        dispatch(addItem({
            section: title,
            item
        }))
    }

    return (
        <View style={styles.box}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Добавить вещь...' />
            <View style={styles.iconBox}>
                <TouchableOpacity onPress={() => addHandler(text)}>
                    <MaterialIcons name="library-add-check" size={24} color="#4c4947" style={{ marginRight: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setEdit(false)}>
                    <AntDesign name="closecircle" size={24} color="#4c4947" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ceccce',
        borderBottomWidth: 2,
        padding: 15,
    },
    iconBox: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 10,
    },
});