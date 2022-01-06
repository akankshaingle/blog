import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext'
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Button, TouchableOpacity } from "react-native";
import EditScreen from "./src/screens/EditScreen";
import { ShowScreenOption } from "./src/screens/ShowScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IndexScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '700',
          }
        }}>
        <Stack.Screen
          options={({ navigation }) => ({
            headerTitle: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="Index" component={IndexScreen}
        />
        <Stack.Screen
          // options={({ navigation, route }) => ({
          //   headerTitle: 'Blogs',
          //   headerRight: () => (
          //     <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
          //       <Foundation name="pencil" size={30} color="black" />
          //     </TouchableOpacity>
          //   ),
          // })}
          options={ShowScreenOption}
          name="Show" component={ShowScreen} />
        <Stack.Screen
          options={{ title: 'Blogs' }} name="Create" component={CreateScreen} />
        <Stack.Screen
          options={{ title: 'Blogs' }} name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App
export default () => {
  return <Provider>
    <App />
  </Provider>

};