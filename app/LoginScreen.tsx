import { View, Text, TouchableOpacity, Alert, SafeAreaView, Switch } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from 'Utils/Colors';
import Toast from 'react-native-toast-message';

type RootStackParamList = {
  SignupScreen: undefined;
  HomeScreen: undefined;
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    if (!isAdmin) {
      if(!email){
        Toast.show({
          type:"error",
          text1:"Invalid Credentials",
          text2:"Please Enter Email"
        })
      }

      if(!password){
        Toast.show({
          type:"error",
          text1:"Invalid Credentials",
          text2:"Please Enter Password"
        })
      }
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            navigation.replace('HomeScreen');
            Toast.show({
              type:"success",
              text1:"Login Successfull",
              text2:`Welcome back ${email}`
            })
          }
        })
        .catch((error) => {
          if(error.code === 'auth/invalid-email'){
            Toast.show({
              type:"error",
              text1:"User Not Registered",
              text2:"Please Sign up first",
            })
            // return ;
          }
          else if(error.code === 'auth/wrong-password'){
            Toast.show({
              type:"error",
              text1:"Invalid Password",
              text2:"Please Try again."
            })
          }
          else{
            Toast.show({
              type:"error",
              text1:'Login Failed',
              text2:error.message
            })
          }
        });
    }
    if(isAdmin){
      if(email === 'admin@kikz' && password === '123'){
        navigation.replace('HomeScreen')
      }
      else{
        alert("Invalid Credentials")
      }
    }
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary }}
      className="flex h-screen w-full items-center justify-center">
      <View className="absolute right-5 top-20  flex items-end gap-1">
        <Switch
        className='scale-[.7]'
          value={isAdmin}
          ios_backgroundColor={'lightgrey'}
          onValueChange={() => setIsAdmin((prev) => !prev)}
          thumbColor={colors.white}
          trackColor={{ true: colors.secondary }}
        />
        <Text className={`uppercase text-sm font-medium ${isAdmin ? 'text-orange-400' : 'text-white'}`}> {isAdmin ? "You're Admin" : "You're User "} </Text>
      </View>
      <Text className="mb-24 w-[90%] text-center text-3xl font-light uppercase text-white">
        {' '}
        Welcome Back – Access Your Collection!
      </Text>
      <View className="mb-5 w-[70%] border-b border-white p-2 font-thin text-white">
        <TextInput
          className="text-white"
          placeholderTextColor={'white'}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="mb-5 w-[70%] border-b border-white p-2 font-thin text-white">
        <TextInput
          className="text-white"
          placeholderTextColor={'white'}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity className="mb-4 mt-12 w-[60%]" onPress={handleLogin}>
        <Text className="rounded-md  bg-[#ED7535] px-8 py-4 text-center text-sm  font-light text-white  ">
          Enter the Sneakerverse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text className="w-full uppercase text-white ">
          No Account? No Problem! <Text className="font-bold text-orange-400 "> Register!</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
