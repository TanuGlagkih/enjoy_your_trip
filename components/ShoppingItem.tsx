import { StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from './Themed';
import { useDispatch } from 'react-redux';
import { removeItemToBuy, setCheckedToBuy } from '../services/shoppingListSlice';

type TSectionItem = {
    title: string;
    id: string
};

export default function ShoppingItem(props: { el: TSectionItem }) {
    const dispatch = useDispatch();

    const deleteEl = (id: string): void => {
        dispatch(removeItemToBuy(id))
    }

    const isChecked = (id: string): void => {
        dispatch(setCheckedToBuy(id))
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
        alignItems: 'baseline',
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