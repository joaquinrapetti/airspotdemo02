import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import Social from "../components/Social";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = () => {
  const navigation = useNavigation();
  // const user = useSelector(selectUser);

  console.log("SignUp");

  // On load component
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView
      className={`flex-1 justify-center mx-6
        ${Platform.OS === "android" && "mt-8"} `}
    >
      {/* Hero component */}
      <View className="flex-1 items-center">
        <Image
          style={{ width: 270, height: 270, resizeMode: "contain" }}
          source={require("../../assets/LoginHero.png")}
        />
        <Image
          className="-mt-20"
          source={require("../../assets/LogoExpanded.png")}
        />
      </View>

      {/* <View className="bg-red-300">
        <Text>{user[1].name}</Text>
        <Text>{user[1].username}</Text>
        <Text>{user[1].password}</Text>
      </View> */}

      {/* Form */}
      <View className="h-72 mb-10 items-center">
        <View className="w-full justify-center items-center">
          <View className="w-full">
            <SignUpForm />
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log("Forgot your password?");
            }}
          >
            <Text className="uppercase text-md text-[#1F2F98] font-semibold">
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Socials */}
      <View className="h-20 items-center mb-8 mt-10 pt-2">
        <Social />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-[#1F2F98] font-semibold text-md">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
