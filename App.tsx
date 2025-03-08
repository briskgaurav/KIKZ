import React from 'react';
import './global.css';
import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'app/SplashScreen';
import HomeScreen from 'app/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import ItemScreen from 'app/ItemScreen';
import LoginScreen from 'app/LoginScreen';
import SignupScreen from 'app/SignupScreen';
import MainScreen from 'app/MainScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
