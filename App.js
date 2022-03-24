import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ImageData from './src/screens/ImageData';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown : false} }/>
        <Stack.Screen name="ImageData" component={ImageData} options={{ headerShown : false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;