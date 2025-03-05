import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Touchable } from 'react-native';
import React, { useState } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon } from 'react-native-heroicons/outline';
import { colors } from 'Utils/Colors';

const Header = () => {
  const [ShowInput, setShowInput] = useState(false);

  return (
    <SafeAreaView>
      <View className="bg-transparent flex-row  items-center justify-between px-10">
        <View className="w-[55%]">
          <View className={`flex-row ${ShowInput ? 'border' : ''} rounded-full border-[#796857]  p-2 px-3`}>
            {ShowInput ? (
              <TextInput maxLength={10} placeholder='Search here...' placeholderTextColor={colors.primary} className="flex-1" />
            ) : (
              <View className="flex-1"></View>
            )}
            <TouchableOpacity onPress={() => setShowInput((prev) => !prev)}>

            <MagnifyingGlassIcon   size={25} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <ShoppingBagIcon size={25} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
