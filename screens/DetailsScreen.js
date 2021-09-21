import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import globalUserModel from "./UserModel";

export default function DetailsScreen({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Image
          style={globalStyles.CoverImg}
          source={{ uri: route.params.photo }}
        />
        <Text>Name: {route.params.name}</Text>
        <Text>Surname: {route.params.surname}</Text>
        <Text>Email address: {route.params.email}</Text>
        <Text>Mobile number: {route.params.mobile}</Text>
        <Text>Physical address: {route.params.address}</Text>
      </ScrollView>
    </View>
  );
}
