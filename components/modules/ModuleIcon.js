import { StyleSheet, Image, View } from "react-native";

export default function ModuleIcon() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("./../../assets/icons/invest.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  icon: {
    width: "100%", 
    height: "100%",
    objectFit: "contain"
  },
});
