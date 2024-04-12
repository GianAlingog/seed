import { StyleSheet, Text, View, Pressable } from "react-native";

export default function QuizOption({ option, color, press }) {

  return (
    <View style={[{backgroundColor: color}, styles.container]}>
      <Pressable style={styles.pressable} onPress={press}>
        <Text style={styles.text}>{option}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,

    borderRadius: 16,
    width: "100%",
    height: "100%",

    borderWidth: 1,
  },
  pressable: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    textAlignVertical: "center",
  },
});
