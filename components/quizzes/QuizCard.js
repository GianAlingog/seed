import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

import QuizOption from './QuizOption';
import FillerBox from "../FillerBox";

export default function LessonCard({ question }) {
  const optionCount = question?.options.length;
  const correctIndex = question?.correct;
  const [colors, setColors] = useState(Array(optionCount).fill("#FAFAFA"));

  function handleTap(index) {
    if (index === correctIndex) {
      let colorsCopy = [...colors];
      colorsCopy[index] = "#85D87C";
      setColors(colorsCopy);
    } else {
      let colorsCopy = [...colors];
      colorsCopy[index] = "#F6665F";
      colorsCopy[correctIndex] = "#85D87C";
      setColors(colorsCopy);
    }
  }

  return (
    <View style={styles.card}>
      <FlatList
        // contentContainerStyle={{
        //   paddingBottom: 20,
        // }}
        data={question.options}
        renderItem={({ item, index }) => {
          return (
            <QuizOption
              option={item}
              color={colors[index]}
              press={() => handleTap(index)}
            />
          );
        }}
        // keyExtractor={item => item.key}
        ItemSeparatorComponent={<FillerBox h={20} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "auto",
    // borderRadius: 16,
    // backgroundColor: "#C4DCFF",
    // padding: 20,
  },
  title: {
    fontSize: 24,
    // fontFamily: LEAGUE SPARTAN
    color: "#85D87C", // Change color darker
    fontWeight: "600"
  },
  content: {
    fontSize: 20,
    // fontFamily: LIBRE FRANKLIN
    color: "#000000",
    fontWeight: "400",
  },
});