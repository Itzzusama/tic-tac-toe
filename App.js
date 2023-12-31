// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserScreen from './SRC/Screens/UserScreen';
import Home from './SRC/Screens/Home';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={UserScreen} />
        <Stack.Screen name="Tic Tac Toe" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
