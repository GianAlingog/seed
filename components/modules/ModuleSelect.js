import { Image, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

import ModuleIcon from "./ModuleIcon";
import ModuleLabel from "./ModuleLabel";
import ModuleButton from "./ModuleButton";

export default function ModuleSelect({ module, changeScreen }) {
  return (
    <Shadow distance={3} offset={[0, 4]} startColor="#43161712" stretch>
      <View style={styles.container}>
        <ModuleIcon iconPath={module.iconPath} />
        <ModuleLabel label={module.name} description={module.description} />
        <ModuleButton press={changeScreen} />
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#F7F8F8",
    borderRadius: 16,
    flexDirection: "row",
    padding: 10,

    alignItems: "center",
    justifyContent: "center",
  },
});
