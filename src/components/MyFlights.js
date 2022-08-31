import React, { useLayoutEffect } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Data Arrivals
import { myFlightsData } from "../../data/myFlightsData";
import FlyItem from "./FlyItem";

const MyFlights = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="mx-6 mt-4">
      <FlatList
        data={myFlightsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FlyItem
            origin={item.flyInfo.origin}
            destination={item.flyInfo.destination}
            flyNumber={item.flyInfo.flyNumber}
            flyState={item.flyInfo.flyState}
            estimatedTime={item.flyInfo.estimatedTime}
            flyCategory={item.flyInfo.flyCategory}
            airline={item.flyInfo.airline}
          />
        )}
      />
    </View>
  );
};

export default MyFlights;
