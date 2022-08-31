import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

// Variables & Constants
import { colorTheme } from "../../utils/colorTheme";
import { onboardingInfo } from "../../data/onboardingData";

// Components
import DotOnboarding from "../components/DotOnboarding";

// Redux config
import { useSelector } from "react-redux";
import { selectOnboardingItem } from "../features/onboardingSlice";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const onboardingCount = useSelector(selectOnboardingItem);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  //   console.log(onboardingInfo[onboardingCount].info.heroImage);

  return (
    <SafeAreaView
      style={{ backgroundColor: colorTheme.backgroundColor }}
      className={
        Platform.OS === "android"
          ? "mt-8 flex-1 justify-center items-center"
          : "flex-1 justify-center items-center"
      }
    >
      <View className="flex-1 justify-center items-center">
        <Image
          style={{ width: 270, height: 270, resizeMode: "contain" }}
          source={require("../../assets/onboarding1.png")}
          //   source={require(onboardingInfo[onboardingCount].info.heroImage)}
        />
        <View className="items-center mx-6">
          <Text className="font-bold text-lg py-4  text-blue-900">
            {onboardingInfo[onboardingCount].info.title}
          </Text>
          <Text className="text-center  text-gray-500">
            {onboardingInfo[onboardingCount].info.paragraph}
          </Text>
        </View>
        <View className="w-48 justify-between flex-row my-8">
          <FlatList
            contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
            data={onboardingInfo}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DotOnboarding
                onboardingPageCount={onboardingCount}
                item={item}
              />
            )}
          />
        </View>
        {!onboardingInfo[onboardingCount].info.isFinalCard ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            className="flex-row items-center absolute top-12 right-6"
          >
            <Text className=" text-blue-900 text-md font-semibold uppercase">
              Skip
            </Text>
            <Icon name="arrow-forward-outline" type="ionicon" color="#1F2F98" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            className="w-20 h-8 bg-blue-900 items-center justify-center rounded-sm absolute bottom-36 right-12"
          >
            <Text className="text-white font-semibold text-lg">Start</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
