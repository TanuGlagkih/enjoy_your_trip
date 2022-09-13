import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeItemToBuy, setCheckedToBuy } from '../services/shoppingListSlice';
import { removeItem, setChecked } from '../services/itemListSlice';
import { TSectionItem } from './ItemList';

export default function Item(props: { el: TSectionItem, shopping: boolean, title?: string }) {
    const dispatch = useDispatch();
    const title = props.title;

    const deleteEl = (id: string): void => {
        props.shopping ?
            dispatch(removeItemToBuy(id))
            :
            dispatch(removeItem({ title, id }))
    }

    const isChecked = (id: string): void => {
        props.shopping ?
            dispatch(setCheckedToBuy(id))
            :
            dispatch(setChecked({ title, id }))
    }

    return (
        <View style={styles.box}>
            <BouncyCheckbox
                size={25}
                fillColor="#6ead3a"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "#6ead3a" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(checked) => isChecked(props.el.id)}
                isChecked={props.el.isChecked}
            />
            <Text style={styles.itemText} >
                {props.el.title}
            </Text>
            <TouchableOpacity onPress={() => deleteEl(props.el.id)}>
                <MaterialIcons
                    name="highlight-remove"
                    size={24}
                    color="#4c4947"
                />
            </ TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 25,
        borderRadius: 2,
    },
    itemText: {
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        width: '60%',
    },
});