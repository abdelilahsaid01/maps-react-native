import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}