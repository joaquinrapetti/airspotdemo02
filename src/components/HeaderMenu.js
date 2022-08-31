import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const HeaderMenu = ({ headerTitle }) => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#1F2F98] h-16 flex-row justify-between items-center px-6">
      <View className="flex-row items-center">
        {headerTitle !== "Explore" && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Explore");
            }}
          >
            <Icon
              name="arrow-back"
              type="material"
              color="lightgray"
              className="mr-4"
            />
          </TouchableOpacity>
        )}
        <Text className="text-gray-300 text-lg font-semibold capitalize">
          {headerTitle}
        </Text>
      </View>
      <View className="bg-[#A9EFEF] w-30 h-8 rounded-full flex-row items-center justify-between px-2">
        <Icon name="flight-takeoff" type="material" color="gray" />
        <Text className="text-gray-500 uppercase text-lg font-semibold ml-2">
          mvd-uy
        </Text>
      </View>
    </View>
  );
};

export default HeaderMenu;
