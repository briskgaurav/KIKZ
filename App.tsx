import React from 'react';
import './global.css';
import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'app/SplashScreen';
import HomeScreen from 'app/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import ItemScreen from 'app/ItemScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
