import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const social = [
  {
    id: 1,
    icon: "sc-facebook",
    type: "evilicon",
  },
  {
    id: 2,
    icon: "sc-google-plus",
    type: "evilicon",
  },
];

const Social = () => {
  return (
    <FlatList
      data={social}
      horizontal
      className="shadow-md"
      contentContainerStyle={{
        width: 90,
        justifyContent: "space-between",
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            console.log("redirect to respective social");
          }}
          className="w-9 h-9 bg-cyan-400 rounded-full justify-center items-center"
        >
          <Icon name={item.icon} type={item.type} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Social;
