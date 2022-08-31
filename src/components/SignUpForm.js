import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addNewUser } from "../features/userSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    password: "",
  });

  console.log(newUser);

  return (
    <View className="relative items-center">
      <TextInput
        className="w-full h-12 my-2"
        mode="outlined"
        label="Name"
        name="name"
        placeholder="Name"
        autoCapitalize={false}
        outlineColor="#1FADAD"
        activeOutlineColor="#1F2F98"
        placeholderTextColor="lightgray"
        value={newUser.name}
        onChangeText={(text) =>
          setNewUser((prevUser) => {
            return {
              ...prevUser,
              name: text,
            };
          })
        }
      />
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
        value={newUser.username}
        onChangeText={(text) =>
          setNewUser((prevUser) => {
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
        value={newUser.password}
        onChangeText={(text) =>
          setNewUser((prevUser) => {
            return {
              ...prevUser,
              password: text,
            };
          })
        }
      />

      <TouchableOpacity
        onPress={() => dispatch(addNewUser(newUser))}
        className="bg-[#1F2F98] h-9 w-full rounded-sm justify-center items-center m-6"
      >
        <Text className="text-white uppercase font-semibold">
          Create Account
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

export default SignUpForm;
