import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";

import LevelSelect from "../components/levels/LevelSelect";
import Label from "../components/Label";
import FillerBox from "../components/FillerBox";

export default function LevelSelectScreen({ navigation, route }) {
  const { levels } = route.params;
  console.log(levels);

  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <Label label="Levels" />
      <FillerBox h={20} />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        data={levels}
        renderItem={({ item }) => {
          return (
            <LevelSelect
              level={item}
              changeScreen={() => navigation.navigate("Lesson")}
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
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
