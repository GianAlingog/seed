import { View, Image, StyleSheet, Pressable } from "react-native";

export default function LevelIcon({ iconPath, press }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={press}>
        <View style={styles.circle}>
          <Image
            style={styles.icon}
            source={require("./../../assets/icons/stock-market.png")}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    // borderRadius: 50,
  },
  circle: {
    height: 100,
    width: 100,
    backgroundColor: "#C4DCFF",
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    width: "100%",
    height: "100%",
    borderRadius: 50, // This seems to have no effect
  },
  icon: {
    width: 75,
    height: 75,
    objectFit: "contain",
  },
});
