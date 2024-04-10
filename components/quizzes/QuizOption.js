import { StyleSheet, Text, View, Pressable } from "react-native";

export default function QuizOption({ option, correctIndex }) {
  const [color, setColor] = useState("#FAFAFA");

  handleTap = (index) => {
    if (index !== correctIndex) {
      setColor("#F6665F");
    } else {
      setColor("#85D87C"); 
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={handleTap}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    backgroundColor: {color}, // Fix implementation of color
  },
  pressable: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    // fontWeight: "bold",
    textAlignVertical: "center",
  },
});
