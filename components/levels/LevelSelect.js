import { StyleSheet, Text, View } from "react-native";

import LevelIcon from "./LevelIcon";
import LevelLabel from "./LevelLabel";

export default function LevelSelect({ level, changeScreen }) {
  return (
    <View style={styles.container}>
      <LevelIcon iconPath={level.uri} press={changeScreen} />
      <LevelLabel label={level.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    backgroundColor: "",
    borderRadius: 100,
    // padding: 10,

    alignItems: "center",
    justifyContent: "center",
  }
});
