import { StyleSheet, Text, View } from "react-native";
import FillerBox from "../FillerBox";

export default function Module() {
  // const [ fontsLoaded ] = useFonts({
  //   'LeagueSpartan': require("./../../assets/fonts/LeagueSpartan-Medium.ttf"),
  //   'LibreFranklin': require("./../../assets/fonts/LibreFranklin-Light.ttf")
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Module 5</Text>
      <FillerBox h={5} b="#F7F8F8"/>
      <Text style={styles.description}>Intro to Investing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
    backgroundColor: "#F7F8F8",
    flex: 7,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    color: "#58C1FF",
    // fontFamily: "LeagueSpartan-Medium"
  },
  description: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7B6F72",
    // fontFamily: "LibreFranklin-Light"
  }
});
