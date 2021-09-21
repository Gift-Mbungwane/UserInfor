import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  titleText: {
    padding: 24,
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  CoverImg: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    padding: 8,
    margin: 10,
    width: 310,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    backgroundColor: "#E8EAED",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    color: "green",
  },
});
