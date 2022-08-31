import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { changeOnboardingCount } from "../features/onboardingSlice";

const DotOnboarding = ({ item, onboardingPageCount }) => {
  const dispatch = useDispatch(changeOnboardingCount);
  // console.log(onboardingPageCount);

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(changeOnboardingCount(item.id));
      }}
    >
      <View
        className={`w-5 h-5 rounded-full ${
          onboardingPageCount === item.id ? "bg-blue-900" : "bg-cyan-400"
        }`}
      ></View>
    </TouchableOpacity>
  );
};

export default DotOnboarding;
