import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";

// Navigation Stack Nav
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

// Import Components
import HeaderMenu from "../components/HeaderMenu";
import Arrivals from "../components/Arrivals";
import Departures from "../components/Departures";
import MyFlights from "../components/MyFlights";

// Data navigation
const dataNavigation = [
  {
    id: 1,
    title: "Arrivals",
    isSelected: true,
  },
  {
    id: 2,
    title: "Departures",
    isSelected: false,
  },
  {
    id: 3,
    title: "My Flights",
    isSelected: false,
  },
];

const FlightsScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const Stack = createNativeStackNavigator();

  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <SafeAreaView
      className={Platform.OS === "android" ? "mt-8 flex-1s" : "flex-1"}
    >
      {/* Header */}
      <HeaderMenu headerTitle="flights" />

      {/* Content */}
      <View className={`h-14 bg-[#1F2F98] shadow-md`}>
        <FlatList
          data={dataNavigation}
          horizontal
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.title);
                setSelectedMenu(item.id);
              }}
              className={`justify-center items-center w-34 px-7 ${
                selectedMenu === item.id ? "border-b-4 border-gray-200" : null
              } `}
            >
              <Text className="text-white uppercase font-semibold">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View className="mx-6 mt-2">
        <TextInput
          className="w-full h-12 my-2 relative"
          mode="outlined"
          label="Flight Number..."
          placeholder="Flight Number..."
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

      <Stack.Navigator>
        <Stack.Screen name="Arrivals" component={Arrivals} />
        <Stack.Screen name="Departures" component={Departures} />
        <Stack.Screen name="My Flights" component={MyFlights} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default FlightsScreen;
