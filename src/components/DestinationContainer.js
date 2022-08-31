import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import DestinationCard from "./DestinationCard";

const DestinationContainer = ({ continentData }) => {
  //   console.log(continentData.countries[0]);
  const [numCols, setNumColsNo] = useState(2);

  return (
    <View className="my-2">
      <Text className="capitalize font-bold text-lg">
        {continentData.continent}
      </Text>
      <FlatList
        data={continentData.countries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          justifyContent: "space-between",
          backgroundColor: "red",
        }}
        renderItem={({ item }) => <DestinationCard countryInfo={item} />}
        numColumns={numCols}
      />
    </View>
  );
};

export default DestinationContainer;
