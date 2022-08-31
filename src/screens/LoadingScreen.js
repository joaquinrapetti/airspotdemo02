import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Menu");
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="bg-[#1F2F98] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../assets/LoadingGiffLogin.gif")}
        animation="bounceInRight"
        iterationCount={1}
        style={{ width: 320, height: 320, resizeMode: "contain" }}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;
