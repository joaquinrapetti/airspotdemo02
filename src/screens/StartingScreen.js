import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useEffect } from "react";
import { Image, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

const StartingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#1F2F98] justify-center items-center">
      <Animatable.Image
        source={require("../../assets/StartingLogo.png")}
        animation="slideInUp"
        iterationCount={1}
        style={{ width: 180, height: 195, resizeMode: "contain" }}
      />
    </SafeAreaView>
  );
};

export default StartingScreen;
