import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

// User Data
import { profileInfo } from "../../data/profileData";

const UserInfo = () => {
  return (
    <View className="m-6 flex-1 bg-red-300 rounded-md shadow-sm">
      <Image
        style={{
          width: "100%",
          height: 220,
          resizeMode: "cover",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={require("../../assets/profilePicture.jpeg")}
      />
      <View className="bg-white h-28 rounded-b-md p-3 justify-between">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-[#1F2F98] capitalize text-lg font-semibold">
              {profileInfo.name} {profileInfo.lastname}
            </Text>
            <Text className="text-[#1F2F98] capitalize">
              {profileInfo.country}
            </Text>
          </View>
          <Icon name="edit" type="material" color="#1F2F98" />
        </View>

        <TouchableOpacity>
          <Text className="text-[#1F2F98] font-semibold uppercase">
            view more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo;
