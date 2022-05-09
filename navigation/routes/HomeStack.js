import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import Home from '../../screens/Maps/Home';
import Maps from '../../screens/Maps/Maps';
import QrScanner from '../../screens/Maps/QrScanner';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
            <Stack.Screen name="QrScanner" component={QrScanner} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}