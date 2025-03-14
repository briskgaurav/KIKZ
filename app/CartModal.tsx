import Header from 'components/Header';
import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { colors } from 'Utils/Colors';

interface CartModalProps {
  cartItems: string[];
  toggleModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ cartItems, toggleModal }) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View className="flex-1 items-center justify-center bg-black bg-opacity-50">
        <SafeAreaView
          style={{ backgroundColor: colors.secondary }}
          className="relative h-full w-full">
          <View
            style={{ backgroundColor: colors.primary }}
            className="absolute top-0 h-[95%] w-full flex-row items-center justify-between rounded-b-[30px] px-10">
            <View className=' absolute top-0 left-0 bg-white w-full h-[80%]'>
              <View className="w-full flex-row bg-white">
                <TouchableOpacity onPress={toggleModal}>
                  <ChevronLeftIcon size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <HeartIcon size={30} />
                </TouchableOpacity>
              </View>

              <View className="px-10">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <Text key={index} className="text-lg">
                      {item}
                    </Text>
                  ))
                ) : (
                  <View className="flex items-center justify-center">
                    <Text className="text-lg">No items in the cart</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default CartModal;
