import {View, Text, StyleSheet} from 'react-native'

export default function LevelLabel({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    color: "#58C1FF",
  }
});
