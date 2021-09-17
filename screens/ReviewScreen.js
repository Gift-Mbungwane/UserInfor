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

export default function ReviewScreen({ navigation }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState(null);

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
  }, [navigation]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
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
                {image && (
                  <Image
                    multiline
                    b={globalStyles.input}
                    source={{ uri: image }}
                    value={{ uri: image }}
                    onChangeText={(result) => setImage(result.uri)}
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </View>
              <Text>Name:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="name"
                onChangeText={(val) => setName(val)}
                value={name}
              />
              <Text>Surname:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Surname"
                onChangeText={(val) => setSurname(val)}
                value={surname}
              />
              <Text>Email:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="example.exam@gmail.com"
                onChangeText={(val) => setEmail(val)}
                value={email}
              />
              <Text>Cellphone:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Phone no.: (+27) 0"
                onChangeText={(val) => setPhone(val)}
                value={phone}
                keyboardType="numeric"
              />
              <Text style={globalStyles.text}>Address:</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="44 lactose Str. Avennue"
                onChangeText={(val) => setAddress(val)}
                value={address}
              />
              <Button
                title="submit"
                style={globalStyles.button}
                onPress={() => {
                  navigation.navigate("DetailsScreen", {
                    image: image,
                    name: name,
                    surname: surname,
                    email: email,
                    phone: phone,
                    address: address,
                  });
                }}
              >
                submit
              </Button>
            </KeyboardAvoidingView>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
