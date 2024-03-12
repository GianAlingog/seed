import { StyleSheet, Text, View } from "react-native"

export default function Label({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 28,
    // fontFamily: LEAGUE SPARTAN
    color: "#85D87C",
    fontWeight: "600"
  }
});
