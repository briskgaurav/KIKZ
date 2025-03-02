import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from 'Utils/Colors';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {}, 50);
  }, []);

  return (
    <View
      style={{ backgroundColor: colors.secondary }}
      className="flex-1 items-center justify-center">
      <Text className="text-9xl font-thin text-white">KIKZZ</Text>
    </View>
  );
};

export default SplashScreen;
