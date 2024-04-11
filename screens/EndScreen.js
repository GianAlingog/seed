import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Label from "../components/Label";

export default function EndScreen({ navigation, route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate("Quiz", {
        item: item,
      })}>
        <View styles={styles.pressable}>
          <Label label="Congratulations!" style={{textAlign: "center"}}/>
          <Text style={styles.text}>You gained 50 credits and 20 EXP!</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 20,
  },
  pressable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    // fontFamily: LIBRE FRANKLIN
    color: "#000000",
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 30,
    textAlign: "center",
  },
});
