import { Image, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

import ModuleIcon from "./ModuleIcon"
import ModuleLabel from "./ModuleLabel";
import ModuleButton from "./ModuleButton";

export default function ModuleSelect() {
  return (
    <Shadow offset={[0, 10]} startColor="#1D161712" stretch>
      <View style={styles.container}>
        <Image style={styles.icon}/>
        <ModuleIcon />
        <ModuleLabel />
        <ModuleButton />
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