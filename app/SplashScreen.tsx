import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from 'Utils/Colors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
};

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      })
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={{ backgroundColor: colors.secondary }}
      className="flex-1 items-center justify-center">
        <StatusBar style='light' />
      <Text className="text-9xl font-extralight text-white">KIKZ<Text style={{color:colors.white}} className='font-normal'>Z</Text></Text>
    </View>
  );
};

export default SplashScreen;
