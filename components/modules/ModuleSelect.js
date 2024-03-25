import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { Shadow } from "react-native-shadow-2";

import ModuleIcon from "./ModuleIcon";
import ModuleLabel from "./ModuleLabel";
import ModuleButton from "./ModuleButton";
import Submodule from "./Submodule";
import FillerBox from "../FillerBox";

export default function ModuleSelect({ navigation, module, changeScreen }) {
  return (
    <Shadow distance={3} offset={[0, 4]} startColor="#1D161712" stretch>
      <View style={styles.container}>
        <View style={styles.module}>
          <ModuleIcon iconPath={module.iconPath} />
          <ModuleLabel label={module.name} description={module.description} />
          <ModuleButton press={changeScreen} />
        </View>

        <FlatList
          contentContainerStyle={{
            paddingBottom: 5,
          }}
          data={module.submodules}
          renderItem={({ item }) => {
            return (
              <Submodule
                navigation={navigation}
                submodule={item}
                changeScreen={() =>
                  navigation.navigate("Levels", {
                    levels: item.levels,
                  })
                }
              />
            );
          }}
          ItemSeparatorComponent={<FillerBox h={10} />}
        />
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F7F8F8",
    borderRadius: 16,
    padding: 10,
  },
  module: {
    height: 100,
    width: "100%",
    backgroundColor: "#F7F8F8",
    borderRadius: 16,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
});
