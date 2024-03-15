import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import FillerBox from "../components/FillerBox"
import Label from "../components/Label";

export default function LessonScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <Label label="Lesson" />
      <FillerBox h={20} />
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
});
