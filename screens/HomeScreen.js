import { View, Text, StyleSheet } from "react-native";

import ModuleSelect from "../components/modules/ModuleSelect";
import Label from "../components/Label";
import FillerBox from "../components/FillerBox";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FillerBox b="#f2f2f2" h={20} />
      <Label label="Modules" />
      <FillerBox b="#f2f2f2" h={20} />
      <ModuleSelect changeScreen={() => navigation.navigate("Levels")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
