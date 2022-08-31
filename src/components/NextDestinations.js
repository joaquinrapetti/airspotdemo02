import React from "react";
import { View, Text, FlatList } from "react-native";

// User Next detination data
import { profileInfo } from "../../data/profileData";
import NextDestinationCard from "./NextDestinationCard";

const NextDestinations = () => {
  return (
    <View className="m-6 flex-1">
      <Text className="text-[#1F2F98] font-semibold">Next Destinations</Text>
      <FlatList
        data={profileInfo.nextDetinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NextDestinationCard item={item} />}
      />
    </View>
  );
};

export default NextDestinations;
