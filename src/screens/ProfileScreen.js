import React from "react";
import { View, Text, SafeAreaView } from "react-native";

// Import Components
import HeaderMenu from "../components/HeaderMenu";
import NextDestinations from "../components/NextDestinations";
import UserInfo from "../components/UserInfo";

const ProfileScreen = () => {
  return (
    <SafeAreaView
      className={Platform.OS === "android" ? "mt-8 flex-1" : "flex-1"}
    >
      {/* Header */}
      <HeaderMenu headerTitle="profile" />

      {/* UserInfo */}
      <UserInfo />

      {/* Next destinations */}
      <NextDestinations />
    </SafeAreaView>
  );
};

export default ProfileScreen;
