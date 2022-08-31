import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

// Import Components
import HeaderMenu from "../components/HeaderMenu";

// Data
import { destinationInfo } from "../../data/destinationData";
import DestinationContainer from "../components/DestinationContainer";

const DestinationsScreen = () => {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView
      className={Platform.OS === "android" ? "mt-8 flex-1" : "flex-1 "}
    >
      {/* Header */}
      <HeaderMenu headerTitle="destinations" />

      {/* Search */}
      <View className="m-6">
        <TextInput
          className="w-full h-12 my-2 relative"
          mode="outlined"
          label="Country, City..."
          name="search"
          placeholder="Country, City..."
          outlineColor="#1FADAD"
          activeOutlineColor="#1FADAD"
          placeholderTextColor="lightgray"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          onPress={() => {
            console.log("See Password");
          }}
          className="absolute right-4 bottom-5"
        >
          <Icon name="search" type="material" color="#1FADAD" size={30} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="mx-6">
        <FlatList
          data={destinationInfo}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DestinationContainer continentData={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationsScreen;
