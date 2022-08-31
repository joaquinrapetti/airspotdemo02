import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewUser,
  selectUser,
  selectUserUsername,
} from "../features/userSlice";

const LoginForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const usersFromDB = useSelector(selectUser);
  const [error, setError] = useState(false);
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  console.log(usersFromDB);

  // Logic - user login
  const handleLogin = () => {
    if (!loginUser.username || !loginUser.password) {
      setError(true);
    } else {
      dispatch(selectUserUsername(loginUser));
    }
  };

  return (
    <View className="relative items-center">
      {error && (
        <View className="w-full h-12 justify-center items-center border border-red-700 rounded-sm bg-red-100 mb-4">
          <Text className="text-red-700 font-semibold">
            Incorrect username or password. Try again!
          </Text>
        </View>
      )}
      <TextInput
        className="w-full h-12 my-2"
        mode="outlined"
        label="Username/Email"
        name="username"
        placeholder="Username/Email"
        autoCapitalize={false}
        outlineColor="#1FADAD"
        activeOutlineColor="#1F2F98"
        placeholderTextColor="lightgray"
        value={loginUser.username}
        onChangeText={(text) =>
          setLoginUser((prevUser) => {
            return {
              ...prevUser,
              username: text,
            };
          })
        }
      />
      <TextInput
        className="w-full h-12 my-2"
        mode="outlined"
        label="Password"
        name="password"
        placeholder="Password"
        autoCapitalize={false}
        outlineColor="#1FADAD"
        activeOutlineColor="#1F2F98"
        placeholderTextColor="lightgray"
        value={loginUser.password}
        onChangeText={(text) =>
          setLoginUser((prevUser) => {
            return {
              ...prevUser,
              password: text,
            };
          })
        }
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-[#1F2F98] h-9 w-full rounded-sm justify-center items-center m-6"
      >
        <Text className="text-white uppercase font-semibold">
          Login Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoadingUser");
        }}
        className="bg-[#1F2F98] h-9 w-full rounded-sm justify-center items-center m-6"
      >
        <Text className="text-white uppercase font-semibold">
          Continue with app
        </Text>
      </TouchableOpacity>

      {/* {label === "Password" && (
        <TouchableOpacity
          onPress={() => {
            console.log("See Password");
          }}
          className="absolute right-4 bottom-10"
        >
          <Icon name="visibility" type="material" color="#1FADAD" />
        </TouchableOpacity>
      )}

      {label === "Password" && (
        <Text className="text-sm text-[#1FADAD]">Minimum 8 characters.</Text>
      )} */}
    </View>
  );
};

export default LoginForm;
