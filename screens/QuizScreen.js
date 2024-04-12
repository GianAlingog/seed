import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";

import FillerBox from "../components/FillerBox";
import Label from "../components/Label";
import QuizCard from "../components/quizzes/QuizCard";
import { updateData } from "../assets/DataHandler";

export default function QuizScreen({ navigation, route }) {
  const { item } = route.params;
  const questions = item.questions;
  const [index, setIndex] = useState(0);

  let questionCount = questions?.length;

  const handleTap = () => {
    // implement later
  };

  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <View style={{ height: 80 }}>
        <Label label={questions[index].question} />
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
