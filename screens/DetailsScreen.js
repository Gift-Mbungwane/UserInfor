import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function DetailsScreen({ route, navigation }) {
  const { name, surname, email, address, phone, image } = route.params;

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Image style={globalStyles.CoverImg} source={{ uri: image }} />

        <Text>{name}</Text>
        <Text>{surname}</Text>
        <Text>Your email addres: {email}</Text>
        <Text>Your phone number is: {phone}</Text>
        <Text>Your address is: {address}</Text>
      </ScrollView>
    </View>
  );
}
