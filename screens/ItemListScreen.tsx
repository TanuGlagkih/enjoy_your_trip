import { StyleSheet, View } from 'react-native';
import ItemList from '../components/ItemList';

import { RootStackScreenProps } from '../types';

export default function ItemListScreen({ route }: RootStackScreenProps<'ItemList'>) {

    return (
        <View style={styles.container}>
            <ItemList title={route.params.title} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flexDirection: 'row',
        borderBottomColor: '#ceccce',
        borderBottomWidth: 2,
        padding: 15,
        justifyContent: 'space-between'
    },
    head: {
        fontWeight: 'bold',
        fontSize: 20,
        textDecorationColor: '#4c4947'
    }
});