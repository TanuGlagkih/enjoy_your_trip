import { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { addItem } from '../services/itemListSlice';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type TItemsForm = {
    setEdit: (edit: boolean) => void,
    title: string,
};

export default function ItemsForm({ setEdit, title }: TItemsForm) {
    const [text, setText] = useState('');
    const ref = useRef(null);
    const dispatch = useDispatch();

    const onChange = (text: string) => {
        setText(text)
    }

    const addHandler = (text: string): void => {
        //@ts-ignore
        if (ref.current !== null) ref.current.value = null;
        setText('');

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
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder='Добавить вещь...'
                ref={ref}
            />
            <View style={styles.iconBox}>
                <TouchableOpacity
                    onPress={() => addHandler(text)}
                    disabled={!text ? true : false}>
                    <MaterialIcons
                        name="library-add-check"
                        size={24}
                        color="#4c4947"
                        style={{ marginRight: 30 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setEdit(false)}>
                    <AntDesign
                        name="closecircle"
                        size={24}
                        color="#4c4947"
                        style={{ marginRight: 20 }}
                    />
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