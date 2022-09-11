import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type TProps = {
    openItemsList: (title: string) => void,
    el: {
        title: string;
        key: string;
    }
};

export default function SectionItem({ openItemsList, el }: TProps) {

    return (
        <TouchableOpacity onPress={() => openItemsList(el.title)} >
            <Text style={styles.itemText} >
                {el.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemText: {
        padding: 20,
        textAlign: 'justify',
        fontSize: 24,
        marginTop: 10,
        opacity: 10,
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#6ead3a',
    },
});