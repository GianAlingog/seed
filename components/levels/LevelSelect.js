import { StyleSheet, Text, View } from "react-native";

export default function LevelSelect({ level, changeScreen }) {
  return (
    <View>
      <LevelIcon iconPath={level.iconPath} press={changeScreen} />
      <LevelLabel label={level.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  height: 200,
  width: 200,
  backgroundColor: "",
  borderRadius: 100,
  // padding: 10,

  // alignItems: "center",
  // justifyContent: "center",
});
