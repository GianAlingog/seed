import { StyleSheet, Text, View } from 'react-native';

export default function LessonCard({ lesson }) {
  return (
    <View style={styles.card}>
      {/* <Text style={styles.title}>
        {lesson.name}
      </Text> */}
      <Text style={styles.content}>
        {lesson.content}
      </Text>
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