import { View, Text, StyleSheet } from "react-native";

export default function LevelSelectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Level Select</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
