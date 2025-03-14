import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from 'Utils/Colors';
import { ArrowLeftCircleIcon, BackwardIcon, ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import Toast from 'react-native-toast-message';


type RootStackParamList = {
  LoginScreen: undefined;
};

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignup = async () => {
    
    if(!name){
      Toast.show({
        type:"error",
        text1:"Invalid Credentials",
        text2:"Please Enter Name"
      })
    }

    if(!email){
      Toast.show({
        type:"error",
        text1:"Invalid Credentials",
        text2:"Please Enter Email",
      })
    }

    if(!password){
      Toast.show({
        type:"error",
        text1:"Invalid Credentials",
        text2:"Please Enter Password",
      })
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        updateProfile(user, {
          displayName: name,
        })
          .then()
          .catch();

        // console.log("DETAILS::::::::::::",user.displayName)
        navigation.navigate('LoginScreen');

        Toast.show({
          type:"success",
          text1:"Successfully",
          text2:"User Register Successfully"
        })
      })
      .catch((error) => {
        console.log("error is:",error)
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode === 'auth/email-already-in-use'){
          Toast.show({
            type:"error",
            text1:"Error",
            text2:"Email is already registered"
          })
        }
        console.log('Error code', errorCode);
        console.log('Error Message', errorMessage);
      });
    setName('');
    setPassword('');
    setEmail('');
  };

  const handleGoogleSignIn = () => {};

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.primary }}
      className="flex h-screen w-full items-center justify-center">
      <TouchableOpacity onPress={()=>navigation.goBack()} className="absolute top-20 left-5 ">
        <ChevronLeftIcon color={colors.white} />
      </TouchableOpacity>
      <Text className="mb-24 w-[85%] text-center text-3xl font-light uppercase text-white">
        {' '}
        Step Into Style – Create Your user Account Today!{' '}
      </Text>
      <View className="mb-5 w-[70%] border-b border-white p-2 font-thin text-white">
        <TextInput
          placeholderTextColor={'white'}
          className=" text-white"
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View className="mb-5 w-[70%] border-b border-white p-2 font-thin text-white">
        <TextInput
          placeholderTextColor={'white'}
          className="text-white"
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View className="mb-5 w-[70%] border-b border-white p-2 font-thin text-white">
        <TextInput
          className="text-white"
          placeholderTextColor={'white'}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View className="mb-5 flex w-full items-center justify-center gap-4">
        <TouchableOpacity className="mt-20 w-[60%] " onPress={handleSignup}>
          <Text className="rounded-md  bg-[#ED7535] px-8 py-4 text-center text-sm  font-light text-white  ">
            Your Next Pair Is Waiting – Log In!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoogleSignIn} className="w-[60%]">
          <Text className="rounded-md bg-sky-400 px-8 py-4 text-center text-sm  font-light text-white  ">
            {' '}
            Sign up with Google{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        <Text className="w-full uppercase text-white ">
          Already a Member? <Text className="font-bold text-orange-400 "> Log In NOW!</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
