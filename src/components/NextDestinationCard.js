import React from "react";
import { View, Text } from "react-native";

const NextDestinationCard = ({ item }) => {
  return (
    <View className="bg-white shadow-sm h-14 w-full my-2 rounded-sm p-2 flex-row">
      <View className="h-full justify-between  flex-1">
        <Text className="text-[#1F2F98] uppercase">{item.toCountry}</Text>
        <Text className="text-[#1F2F98] capitalize font-bold">
          {item.toCity}
        </Text>
      </View>
      <View className="flex-1">
        <Text className="text-[#1F2F98] text-xs">{item.toDate}</Text>
      </View>
    </View>
  );
};

export default NextDestinationCard;
