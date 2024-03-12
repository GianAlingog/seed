import { StyleSheet, Image, View } from "react-native";

export default function ModuleButton() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("./../../assets/icons/arrow.png")}
      />
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
  icon: {
    width: "100%", 
    height: "100%",
    objectFit: "contain"
  },
});
