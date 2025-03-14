import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { colors } from 'Utils/Colors';
import { StatusBar } from 'expo-status-bar';
import Header from 'components/Header';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';



type RootStackParamList = {
  HomeScreen: undefined;
  ItemScreen: undefined;
  LoginScreen : undefined;
  SignupScreen : undefined;
};

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('WOMENS');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const HandleCategory = (cat: string) => {
    setActiveCategory(cat);
  };
  const getCategoryImage = () => {
    switch (activeCategory) {
      case 'MENS':
        return require('../assets/Covers/MENS.png');
      case 'WOMENS':
        return require('../assets/Covers/WOMENS.png');
      case 'KIDS':
        return require('../assets/Covers/KIDS.png');
    }
  };

  return (
    <View style={{ backgroundColor: colors.primary }} className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ backgroundColor: colors.white }}
        className=" relative h-[85%] overflow-hidden rounded-b-[30px]">
        <SafeAreaView className="absolute top-0 z-30 w-full">
          <Header />
        </SafeAreaView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ItemScreen')}>
          <Image className="h-full w-full bg-cover" source={getCategoryImage()} />
        </TouchableOpacity>
      </View>

      <View className="h-[10%] flex-row items-center justify-between px-10 ">
        <TouchableOpacity className="h-10 items-center" onPress={() => HandleCategory('WOMENS')}>
          <Text className="text-sm font-light text-white">WOMEN</Text>
          {activeCategory === 'WOMENS' && (
            <View
              style={{ backgroundColor: colors.secondary }}
              className="h-2 w-2 rounded-full"></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity className="h-10 items-center" onPress={() => HandleCategory('MENS')}>
          <Text className="text-sm font-light text-white">MEN</Text>
          {activeCategory === 'MENS' && (
            <View
              style={{ backgroundColor: colors.secondary }}
              className="h-2 w-2 rounded-full"></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity className="h-10 items-center" onPress={() => HandleCategory('KIDS')}>
          <Text className="text-sm font-light text-white">KIDS</Text>
          {activeCategory === 'KIDS' && (
            <View
              style={{ backgroundColor: colors.secondary }}
              className="h-2 w-2 rounded-full"></View>
          )}
        </TouchableOpacity>
      </View>
      {/* <View className='flex flex-row gap-2 justify-between px-4'>
        <TouchableOpacity
        onPress={() => { navigation.navigate('LoginScreen') }} >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignupScreen')} >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;
