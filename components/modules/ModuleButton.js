import { StyleSheet, Image, View } from "react-native";

export default function ModuleButton() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("./../../assets/icons/icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // width: 65, // Consider not setting this absolute
    width: "100%", 
    height: "100%",
  },
});
