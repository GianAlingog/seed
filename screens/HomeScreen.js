import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import ModuleSelect from "../components/modules/ModuleSelect";
import Label from "../components/Label";
import FillerBox from "../components/FillerBox";

import data from "../assets/Data";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <Label label="Modules" />
      <FillerBox h={20} />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        data={data}
        renderItem={({ item }) => {
          return (
            <ModuleSelect
              navigation={navigation}
              module={item}
              changeScreen={() =>
                navigation.navigate("Levels", {
                  levels: item.levels,
                })
              }
            />
          );
        }}
        ItemSeparatorComponent={<FillerBox h={20} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
