import React, { useContext } from 'react'
import { Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context, Provider } from '../context/BlogContext'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}-{item.id}</Text>
                                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}><Ionicons name="trash" style={styles.icon} /></TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

// IndexScreen.navigationOptions = () => {
//     return {
//         headerTitle: 'Blog',
//         headerRight: () => (
//             <TouchableOpacity><Feather name="plus" size={30} color="black" /></TouchableOpacity>
//         )
//     }
// }

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
})
export default IndexScreen

