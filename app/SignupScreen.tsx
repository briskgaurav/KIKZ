import { useState } from "react";
import { View, Text,TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';



type RootStackParamList = {
  LoginScreen:undefined;
}

export default function SignupScreen() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    

    const handleSignup = async () => {
        if(!name || !email || !number || !password || !confirmPassword){
            Alert.alert('Error','Please Fill all fields')
            return ;
        }

        if(confirmPassword !== password){
            Alert.alert('Error','Password Mismatch')
            return ;
        }

        console.log(email,password,confirmPassword,name,number)
        
        createUserWithEmailAndPassword(auth,email,password).then(
          (userCredentials) => {
            const user = userCredentials.user
            
            updateProfile(user,{
              displayName:name,
            }).then()
              .catch()

            console.log("DETAILS::::::::::::",user.displayName)
            Alert.alert("User Registered Sucessfully")
            navigation.navigate('LoginScreen')
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log("Error code",errorCode)
            console.log("Error Message",errorMessage)
          })
    }

    const handleGoogleSignIn = () => {
     
    };
    

  return (
    <View className="pt-5">
        <Text> Signup Form </Text>
      <TextInput
       placeholder="Enter Name"
       value={name}
       onChangeText={setName} />

       <TextInput
       placeholder="Enter Email"
       value={email}
       onChangeText={setEmail} />

      <TextInput
       placeholder="Enter number"
       value={number}
       onChangeText={setNumber} />

    <TextInput
       placeholder="Enter password"
       value={password}
       onChangeText={setPassword} />

    <TextInput
       placeholder="Enter confirm Password"
       value={confirmPassword}
       onChangeText={setConfirmPassword} />

    <TouchableOpacity
    onPress={handleSignup} >
        <Text className="bg-red-500 text-white "> Sign up </Text>
    </TouchableOpacity>  

    <TouchableOpacity
    onPress={handleGoogleSignIn} >
       <Text className="bg-blue-500 text-white"> Sign up with Google </Text>
    </TouchableOpacity> 
    </View>
  );
}
