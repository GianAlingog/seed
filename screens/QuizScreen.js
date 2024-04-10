import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";

import FillerBox from "../components/FillerBox";
import Label from "../components/Label";
import LessonCard from "../components/lessons/LessonCard";
import { updateData } from "../assets/DataHandler";

export default function QuizScreen({ navigation, route }) {
  const { questions } = route.params;
  const [index, setIndex] = useState(0);

  let questionCount = questions?.length;

  const handleTap = () => {
    // implement later
  };

  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <View style={{ height: 80 }}>
        <Label label={questions[index].name} />
      </View>
    
      <FillerBox h={20} />

      <View style={{ height: "70%" }}>
        <QuizCard question={questions[index]} />
      </View>
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
});
