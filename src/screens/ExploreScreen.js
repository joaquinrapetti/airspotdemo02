import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-paper";

// Data places
import { placesInfo } from "../../data/placesData";
import HeaderMenu from "../components/HeaderMenu";

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className={Platform.OS === "android" ? "mt-8 flex-1" : "flex-1"}
    >
      {/* Header */}
      <HeaderMenu headerTitle="Explore" />

      {/* SearchBar */}
      <View className="m-6">
        <View>
          <TextInput
            className="w-full h-12 my-2 relative"
            mode="outlined"
            label="Search..."
            name="search"
            placeholder="Search..."
            outlineColor="#1F2F98"
            activeOutlineColor="#1F2F98"
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
            <Icon name="search" type="material" color="#1F2F98" size={30} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={placesInfo}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => console.log(item.title)}
              className="w-28 h-8 rounded-full bg-[#A9EFEF]  border-[#1F2F98] border justify-center items-center m-1"
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
