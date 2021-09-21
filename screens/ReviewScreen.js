import React, { useState, useEffect } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import globalUserModel from "./UserModel";

export default function ReviewScreen({ navigation }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      globalUserModel.setPhoto(result.uri);
      // setImage(result.uri);
    }
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Text>Upload Image:</Text>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  title="Pick an image from camera roll"
                  onPress={pickImage}
                />
                {globalUserModel.photo && (
                  <Image
                    multiline
                    b={globalStyles.input}
                    source={{ uri: globalUserModel.photo }}
                    value={{ uri: globalUserModel.photo }}
                    onChangeText={(result) =>
                      globalUserModel.setPhoto(result.uri)
                    }
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </View>
              <Text>Name:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="name"
                onChangeText={(name) => globalUserModel.setName(name)}
                value={globalUserModel.userName}
              />
              <Text>Surname:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Surname"
                onChangeText={(surname) => globalUserModel.setSurname(surname)}
                value={globalUserModel.surName}
              />
              <Text>Email:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="example.exam@gmail.com"
                onChangeText={(email) => globalUserModel.setEmail(email)}
                value={globalUserModel.email}
              />
              <Text>Cellphone:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Phone no.: (+27) 0"
                onChangeText={(mobile) => globalUserModel.setMobile(mobile)}
                value={globalUserModel.mobile}
                keyboardType="numeric"
              />
              <Text style={globalStyles.text}>Address:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="44 lactose Str. Avennue"
                onChangeText={(address) => globalUserModel.setAddress(address)}
                value={globalUserModel.address}
              />
              <Button
                title="submit"
                style={globalStyles.button}
                onPress={async () => {
                  navigation.navigate("DetailsScreen", {
                    photo: globalUserModel.photo,
                    name: globalUserModel.userName,
                    surname: globalUserModel.surName,
                    email: globalUserModel.email,
                    mobile: globalUserModel.mobile,
                    address: globalUserModel.address,
                  });
                }}
              >
                submit
              </Button>
            </KeyboardAvoidingView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}
