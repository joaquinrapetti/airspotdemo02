import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className={
        Platform.OS === "android"
          ? "mt-8 flex-1 bg-red-200"
          : "flex-1 bg-red-200"
      }
    >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
