import { StyleSheet, Image, View } from "react-native";

export default function ModuleIcon() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("./../../assets/icons/seed.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // width: 65, // Consider not setting this absolute
    width: "100%", 
    height: "100%",
  },
});
