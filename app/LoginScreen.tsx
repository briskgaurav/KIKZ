import { View, Text,TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    MainScreen:undefined;
}

export default function LoginScreen() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleLogin = () => {
      signInWithEmailAndPassword(auth,email,password).then(
        (userCredential) => {
          const user = userCredential.user
          console.log(user)
          if(user){
            Alert.alert('Success','User LogIn Successfully')
            navigation.navigate('MainScreen')
          }
        }
      ).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message 
        console.log("Error Code During Logged in",errorCode)
        console.log("Error Message during loggedin",errorMessage)
      })
    }

  return (
    <View className="m-8">
        <Text>Login</Text>
        <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail} />

        <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword} />

        <TouchableOpacity onPress={handleLogin}>
              <Text>Login</Text>
        </TouchableOpacity>
    </View>
  );
}
