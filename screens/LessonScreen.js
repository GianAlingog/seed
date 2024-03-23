import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";

import FillerBox from "../components/FillerBox";
import Label from "../components/Label";
import LessonCard from "../components/lessons/LessonCard";
import LessonTapHandler from "../components/lessons/LessonTapHandler";
import { updateData } from "../assets/DataHandler";


export default function LessonScreen({ navigation, route }) {
  const { lessons } = route.params;
  const [index, setIndex] = useState(0);

  const handleLeftTap = () => {
    if (index > 0) {
      index--;
    }
    console.log(index);
  };
  const handleRightTap = () => {
    if (index < lessons.length - 1) {
      index++;
    }
    console.log(index);
  };

  const handleTap = () => {
    if (index == lessons.length - 1) {
      updateData("credits", 50);
      updateData("xp", 20);
      navigation.goBack();
    } else if (index < lessons.length - 1) {
      setIndex(index + 1);
    }
    console.log(index);
  };


  return (
    <SafeAreaView style={styles.container}>
      <FillerBox h={20} />
      <Label label="Lesson" />
      {/* Replace with progress bar and back button : Implement in Appbar / header */}
      <FillerBox h={20} />

      {/* Create progress bar or carousel-like dots */}

      {/* <LessonTapHandler onLeftTap={handleLeftTap} onRightTap={handleRightTap}>
        <LessonCard lesson={lessons[index]}/>
      </LessonTapHandler> */}

      <Pressable onPress={handleTap}>
        <LessonCard lesson={lessons[index]} />
      </Pressable>
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
