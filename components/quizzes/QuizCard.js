import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function LessonCard({ question }) {
  return (
    <View style={styles.card}>
      <FlatList
        // contentContainerStyle={{
        //   paddingBottom: 20,
        // }}
        data={question}
        renderItem={({ item }) => {
          return (
            <QuizOption
              // navigation={navigation}
              option={item}
              correctIndex={question.correctIndex}
            />
          );
        }}
        ItemSeparatorComponent={<FillerBox h={20} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: "100%",
    width: "auto",
    borderRadius: 16,
    backgroundColor: "#C4DCFF",
    padding: 20,
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