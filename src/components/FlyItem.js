import React from "react";
import { View, Text, Image } from "react-native";

const FlyItem = ({
  origin,
  destination,
  flyState,
  flyNumber,
  estimatedTime,
  flyCategory,
  airline,
}) => {
  return (
    <View className="flex-row justify-between items-center bg-white my-2 h-16 p-5 shadow-sm">
      <View className="flex-1 h-12 justify-between">
        <Text className="text-[#1F2F98] text-xs">
          {origin} - {destination}
        </Text>
        <Text className="text-[#1F2F98] font-semibold text-lg">
          {flyNumber}
        </Text>
      </View>
      <View className="justify-between items-end flex-1 ">
        <Text className="text-[#1F2F98] font-semibold uppercase">
          {flyState}
        </Text>
        <Text className="text-[#1F2F98] text-xs">{estimatedTime}</Text>
        <Text className="text-[#1F2F98] text-xs">{flyCategory}</Text>
      </View>
      <View className="items-end justify-center ml-6">
        <Image source={require("../../assets/aerolineas/american.png")} />
      </View>
    </View>
  );
};

export default FlyItem;
