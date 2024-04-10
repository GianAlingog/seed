import { Pressable, StyleSheet, Text, View } from "react-native";

import Label from "../components/Label";

export default function EndScreen({ navigation }) {
  return (
    <Pressable onPress={() => navigation.pop(2)}>
      <View>
        <Label text="Congratulations!" />
        <Text style={styles.text}>You gained 50 credits and 20 EXP!</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // fontFamily: LIBRE FRANKLIN
    color: "#000000",
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 30,
  },
});
