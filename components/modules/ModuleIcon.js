import { StyleSheet, Image, View } from "react-native";

function loadImage(path) {
  return { uri: path }; 
}

export default function ModuleIcon({ iconPath }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        // source={{uri: iconPath}}
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
    width: 50, 
    height: 50,
    objectFit: "contain"
  },
});
