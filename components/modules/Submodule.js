import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Submodule({ submodule, changeScreen }) {
  return (
    <Pressable onPress={changeScreen}>
      <View style={styles.container}>
        <Text style={styles.label}>{submodule.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: "auto",
    // try #F2F2F2 ; original #E8E9EB
    backgroundColor: "#EBEBEB",
    flex: 7,
    paddingHorizontal: 20,
    borderRadius: 16,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171717",
    // fontFamily: "LeagueSpartan-Medium"
  },
});
