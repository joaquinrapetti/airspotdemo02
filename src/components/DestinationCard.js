import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const DestinationCard = ({ countryInfo }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(countryInfo.city)}
      className="bg-green-400 w-40 h-48 rounded-tr-2xl rounded-bl-2xl mx-3 my-2 "
    >
      <View className="bg-[#1F2F98] p-2 rounded-bl-2xl flex-row items-center justify-between absolute bottom-0 w-40">
        <View className="">
          <Text className="text-[#A9EFEF] capitalize text-base font-bold">
            {countryInfo.country}
          </Text>
          <Text className="text-[#A9EFEF] capitalize text-sm">
            {countryInfo.city}
          </Text>
        </View>
        <Icon name="favorite-outline" type="material" color="#A9EFEF" />
      </View>
    </TouchableOpacity>
  );
};

export default DestinationCard;
