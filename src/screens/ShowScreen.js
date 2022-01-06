import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Context } from '../context/BlogContext'
import { Foundation } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
    const { id } = route.params;

    const { state } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
            {/* <Text>item id :{id}</Text> */}
        </View>
    )
}

// ShowScreen.options = ({ navigation }) => {
//     return {
//         headerTitle: 'Blog',
//         headerRight: () => (
//             <TouchableOpacity
//                 onPress={() => navigation.navigate('Edit')}>
//                 <Foundation name="pencil" size={30} color="black" />
//             </TouchableOpacity>
//         ),
//     }
// }

export function ShowScreenOption({ route, navigation }) {
    const { id } = route.params;
    return {
        headerTitle: 'Blogs',
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: id })}>
                <Foundation name="pencil" size={30} color="black" />
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({})
export default ShowScreen