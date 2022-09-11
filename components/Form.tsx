import { useRef, useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { addItemToBuy } from '../services/shoppingListSlice';

export default function Form() {
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

        dispatch(addItemToBuy({
            title: text,
            id: Math.random().toString(35).substring(5),
            isChecked: false
        }))
    }

    return (
        <View>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChange}
                    placeholder='Введите покупку...'
                    ref={ref}
                />

            </View>
            <Button
                onPress={() => addHandler(text)}
                title='Добавить'
                color={'#4c4947'}
                disabled={!text ? true : false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 20,
        marginHorizontal: '10%',
        width: '80%',
    },
});