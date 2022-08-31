import React, { useLayoutEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// Navigation Bottom Nav
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

// Screen components
import FlightsScreen from "./FlightsScreen";
import DestinationsScreen from "./DestinationsScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const MenuScreen = () => {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1F2F98",
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "auto",
        },
        tabBarInactiveTintColor: "lightgray",
        tabBarActiveTintColor: "#1F2F98",
        tabBarLabelStyle: { fontSize: 12, marginBottom: 8 },
        tabBarActiveBackgroundColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Flight"
        component={FlightsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="airplane-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Destinations"
        component={DestinationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuScreen;

// screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (route.name === "Flight") {
//         iconName = focused ? "airplane-outline" : "airplane-outline";
//       } else if (route.name === "Destinations") {
//         iconName = focused ? "map-outline" : "map-outline";
//       } else if (route.name === "User") {
//         iconName = focused
//           ? "person-circle-outline"
//           : "person-circle-outline";
//       }

//       // You can return any component that you like here!
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: "tomato",
//     tabBarInactiveTintColor: "gray",
//   })}
