import { StyleSheet, Image, View, Pressable } from "react-native";

export default function ModuleButton({ press }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={press}>
        <Image
          style={styles.icon}
          source={require("./../../assets/icons/arrow.png")}
        />
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
  },
  pressable: {
    width: "100%",
    height: "100%",
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
