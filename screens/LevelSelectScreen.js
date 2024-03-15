import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import FillerBox from "../components/FillerBox";

export default function LevelSelectScreen({ route }) {
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
            <ModuleSelect
              module={item}
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
