import { View, Text,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "expo-router";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TextInput } from "react-native-gesture-handler";

type RootStackParamList = {
    HomeScreen:undefined;
}

export default function LoginScreen() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = () => {

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
